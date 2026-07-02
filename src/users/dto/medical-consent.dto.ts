import { IsString, MinLength } from 'class-validator';

export class MedicalConsentDto {
  @IsString()
  @MinLength(1)
  consentVersion!: string;
}

export class MedicalConsentResponseDto {
  medicalConsentAcceptedAt!: Date;
}
