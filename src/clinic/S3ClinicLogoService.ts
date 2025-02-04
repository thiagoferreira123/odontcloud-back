import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class S3ClinicLogoService {
  private s3: AWS.S3;

  constructor(private configService: ConfigService) {
    this.s3 = new AWS.S3({
      region: 'us-east-2',
      accessKeyId: this.configService.get('AWS_ACCESS_KEY_ID'),
      secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY'),
    });
  }

  async uploadFile(buffer: Buffer, originalname: string): Promise<string> {
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    const fileExtension = originalname.split('.').pop().toLowerCase();

    if (!allowedExtensions.includes(fileExtension)) {
      throw new BadRequestException(
        'Apenas arquivos de imagem são permitidos.',
      );
    }

    const randomFileName = `${uuidv4()}.${fileExtension}`;
    const uploadPath = `clinica-logo/${randomFileName}`;
    const params = {
      Bucket: 'odontcloud',
      Key: uploadPath,
      Body: buffer,
      ACL: 'public-read',
    };

    try {
      const data = await this.s3.upload(params).promise();
      return data.Location; // Retorna a URL completa do arquivo carregado
    } catch (error) {
      console.error('Erro ao fazer upload para o S3:', error);
      throw new Error('Falha no upload de arquivo');
    }
  }

  async deleteFile(fileUrl: string): Promise<void> {
    const fileName = fileUrl.split('/').pop();
    const params = {
      Bucket: 'odontcloud',
      Key: 'clinica-logo/' + fileName,
    };

    try {
      await this.s3.deleteObject(params).promise();
      return;
    } catch (error) {
      console.error('Erro ao deletar arquivo do S3:', error);
      throw new Error('Falha ao deletar arquivo');
    }
  }
}
