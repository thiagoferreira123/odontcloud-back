import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
  Res,
} from '@nestjs/common';
import { Raw, Repository } from 'typeorm';
import { Patient } from './entities/patient.entity';
import { getPatientAge } from './helpers/paciente.helpers';
import { Response } from 'express';
import * as XLSX from 'xlsx';
import { ClinicService } from 'src/clinic/clinic.service';
import { parseNumberToWhatsapp } from 'src/helpers/string-helpers';
import { wppBotUrl } from 'src/whatsapp-message/whatsapp-message.service';

@Injectable()
export class PatientService {
  constructor(
    @Inject('Patient')
    private patientRepository: Repository<Patient>,
    @Inject(forwardRef(() => ClinicService))
    private readonly clinicService: ClinicService,
  ) {}

  async create(
    patientDetails: Patient,
    patient_clinic_id: string,
  ): Promise<Patient> {
    const patient = await this.patientRepository.save({
      ...patientDetails,
      patient_clinic_id,
    });

    const clinic = await this.clinicService.findOne(patient_clinic_id);

    if (
      clinic &&
      clinic.whatsappConfigurations &&
      clinic.whatsappConfigurations[0] &&
      clinic.whatsappConfigurations[0].whatsapp_message_welcome
    ) {
      await this.sendPatientWellcomeWhatsApp(
        patient,
        clinic.whatsappConfigurations[0].whatsapp_message_welcome,
      );
    }

    return patient;
  }

  async findOne(patient_id: string): Promise<Patient> {
    const patient = await this.patientRepository.findOne({
      where: { patient_id },
    });
    if (!patient) {
      throw new NotFoundException(`Patient with ID "${patient_id}" not found`);
    }
    return patient;
  }

  async update(
    patient_id: string,
    patientDetails: Partial<Patient>,
  ): Promise<Patient> {
    const patient = await this.findOne(patient_id);
    return this.patientRepository.save({ ...patient, ...patientDetails });
  }

  async remove(patient_id: string): Promise<void> {
    const patient = await this.findOne(patient_id);
    await this.patientRepository.remove(patient);
  }

  async findAllyClinicId(ClinicId: string): Promise<Patient[]> {
    return this.patientRepository.find({
      where: { patient_clinic_id: ClinicId },
    });
  }

  async getPatientData(patient_id: string): Promise<Patient & { age: number }> {
    const patient = await this.patientRepository.findOne({
      where: { patient_id },
      select: [
        'patient_id',
        'patient_full_name',
        'patient_sex',
        'patient_birth_date',
        'patient_email',
        'patient_photo',
        'patient_phone',
        'patient_clinic_id',
      ],
    });

    patient.patient_photo = patient.patient_photo
      ? patient.patient_photo
      : patient.patient_sex
        ? 'https://odontcloud.com.br/app/assets/images/avatar_paciente_masc.png'
        : 'https://odontcloud.com.br/app/assets/images/avatar_paciente_fem.png';

    return {
      ...patient,
      age: getPatientAge(patient.patient_birth_date),
    };
  }

  async downloadSpreadsheetByPeriod(
    patient_clinic_id: string,
    year: string,
    month: string,
    @Res() res: Response,
  ) {
    // Formata o mês para garantir que está em formato de dois dígitos (ex.: '03' para março)
    const formattedMonth = month.padStart(2, '0');

    // Ajusta a consulta para filtrar pelo ano e mês, além do patient_clinic_id
    const patients = await this.patientRepository.find({
      where: {
        patient_clinic_id,
        patient_register_date: Raw(
          (alias) => `DATE_FORMAT(${alias}, '%Y-%m') = :date`,
          {
            date: `${year}-${formattedMonth}`,
          },
        ),
      },
      order: { patient_register_date: 'ASC' },
    });

    if (!patients || patients.length === 0) {
      throw new NotFoundException('patients not found');
    }

    const processedData = patients.map((patient) => ({
      nome: patient.patient_full_name,
      DataCadastro: new Date(
        patient.patient_register_date,
      ).toLocaleDateString(),
      Email: patient.patient_email,
      Celular: patient.patient_phone,
    }));

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(processedData);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Patients');

    // Usando XLSX.write para gerar a planilha como um buffer
    const buffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });

    const fileName = `pacientes-${month}-${year}.xlsx`;
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
    res.end(buffer);
  }

  async getGenderStatisticByClinicIdAndYear(
    patient_clinic_id: string,
    year: string,
  ): Promise<{
    year: number;
    patient_sex1: number;
    patient_sex0: number;
    months: { month: string; patient_sex1: number; patient_sex0: number }[];
  }> {
    const result = await this.patientRepository
      .createQueryBuilder('patient')
      .select('YEAR(patient.patient_register_date)', 'year')
      .addSelect(
        'SUM(CASE WHEN patient.patient_sex = 1 THEN 1 ELSE 0 END)',
        'patient_sex1',
      )
      .addSelect(
        'SUM(CASE WHEN patient.patient_sex = 0 THEN 1 ELSE 0 END)',
        'patient_sex0',
      )
      .addSelect('MONTH(patient.patient_register_date)', 'month')
      .where('patient.patient_clinic_id = :patient_clinic_id', {
        patient_clinic_id,
      })
      .andWhere(`YEAR(patient.patient_register_date) = :year`, { year })
      // .groupBy('year, month')
      // .orderBy('year, month') // Ordenar por ano e mês
      .getRawMany();

    const monthsMap = {
      1: 'Janeiro',
      2: 'Fevereiro',
      3: 'Março',
      4: 'Abril',
      5: 'Maio',
      6: 'Junho',
      7: 'Julho',
      8: 'Agosto',
      9: 'Setembro',
      10: 'Outubro',
      11: 'Novembro',
      12: 'Dezembro',
    };

    const groupedByMonth = result.map((row) => ({
      month: monthsMap[row.month],
      patient_sex1: row.patient_sex1,
      patient_sex0: row.patient_sex0,
    }));

    return {
      year: result[0]?.ano ?? new Date().getFullYear(),
      patient_sex1: result[0]?.patient_sex1 ?? 0,
      patient_sex0: result[0]?.patient_sex0 ?? 0,
      months: groupedByMonth,
    };
  }

  async getPatientsCountByClinic(
    clinic_id: string,
  ): Promise<{ statusCode: number; message: string }> {
    const patients = await this.patientRepository.find({
      where: { patient_clinic_id: clinic_id },
      take: 2,
    });

    if (patients.length > 0) {
      return { statusCode: 900, message: 'Free account limit reached' };
    } else {
      return { statusCode: 200, message: 'Limit not reached' };
    }
  }

  async findBirthdayPatients(
    clinic_id: string,
    today: string,
  ): Promise<Patient[]> {
    return this.patientRepository.find({
      where: {
        patient_clinic_id: clinic_id,
        patient_birth_date: Raw(
          (alias) => `DATE_FORMAT(${alias}, '%m-%d') = :today`,
          { today },
        ),
      },
    });
  }

  private async sendPatientWellcomeWhatsApp(
    patient: Patient,
    whatsapp_message_welcome: string,
  ) {
    try {
      const firstName = patient.patient_full_name.split(' ')[0];

      const message = whatsapp_message_welcome.length
        ? whatsapp_message_welcome
        : 'Olá [Paciente], hoje é o seu dia! 🎉🎂';

      const postData = {
        id: patient.patient_phone
          ? parseNumberToWhatsapp(patient.patient_phone).replace(/\D/g, '')
          : '',
        message: message.replaceAll('[Paciente]', firstName),
      };

      console.log(postData);

      fetch(
        `${wppBotUrl}/message/text?key=odonto_${patient.patient_clinic_id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        },
      )
        .then(() =>
          console.log(
            `whatsapp wellcome sent for ${patient.patient_full_name}`,
          ),
        )
        .catch(async (error) => {
          if (error instanceof Response) {
            return console.error(
              `Error sending whatsapp wellcome for ${patient.patient_full_name}`,
              error.statusText,
            );
          }

          console.error(
            `Error sending whatsapp wellcome for ${patient.patient_full_name}`,
            'Erro desconhecido',
          );
        });
    } catch (error) {
      console.error('Error sending WhatsApp Wellcome message', error);
    }
  }
}
