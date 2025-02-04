import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('patient_document')
export class PatientDocument {
  @PrimaryGeneratedColumn('uuid')
  documents_id: string;

  @Column()
  documents_patient_id: string;

  @Column({ nullable: true })
  documents_folder_name?: string;

  @Column({ nullable: true })
  documents_upload_date?: string;

  @Column({ type: 'text', nullable: true })
  documents_aws_link?: string;
}
