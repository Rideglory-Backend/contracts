import { IsString, MinLength } from 'class-validator';

export class MedicalConsentDto {
  @IsString()
  @MinLength(1)
  consentVersion!: string;
}

export class MedicalConsentResponseDto {
  medicalConsentAcceptedAt!: Date;
}

export const NOT_SHARED_SENTINEL = '__NOT_SHARED__' as const;
