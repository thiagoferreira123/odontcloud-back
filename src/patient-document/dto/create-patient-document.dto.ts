import { IsString, IsOptional } from 'class-validator';

export class CreatePatientDocumentDTO {
  @IsString()
  documents_id: string;

  @IsString()
  documents_patient_id: string;

  @IsString()
  @IsOptional()
  documents_folder_name?: string;

  @IsString()
  @IsOptional()
  documents_upload_date?: string;

  @IsString()
  @IsOptional()
  documents_aws_link?: string;
}
