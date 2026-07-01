import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsEnum,
  IsOptional,
  IsUUID,
  IsString,
  MinLength,
} from 'class-validator';
import { BloodType } from '../../users/enums';

export class CreateRegistrationDto {
  @IsUUID()
  eventId!: string;

  @IsString()
  @MinLength(1)
  fullName!: string;

  @IsString()
  @MinLength(1)
  identificationNumber!: string;

  @Type(() => Date)
  @IsDate()
  birthDate!: Date;

  @IsString()
  @MinLength(1)
  phone!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(1)
  residenceCity!: string;

  @IsString()
  @MinLength(1)
  eps!: string;

  @IsOptional()
  @IsString()
  medicalInsurance?: string;

  @IsEnum(BloodType)
  bloodType!: BloodType;

  @IsString()
  @MinLength(1)
  emergencyContactName!: string;

  @IsString()
  @MinLength(1)
  emergencyContactPhone!: string;

  @IsUUID()
  vehicleId!: string;

  @IsOptional()
  @IsBoolean()
  saveToProfile?: boolean;

  @IsOptional()
  @IsBoolean()
  shareMedicalInfo?: boolean;

  @IsOptional()
  @IsBoolean()
  allowOrganizerContact?: boolean;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  riskAcceptedAt?: Date;

  @IsOptional()
  @IsString()
  riskAcceptanceVersion?: string;
}
