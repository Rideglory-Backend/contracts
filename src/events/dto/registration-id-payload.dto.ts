import { IsOptional, IsUUID } from 'class-validator';

export class RegistrationIdPayloadDto {
  @IsUUID()
  registrationId!: string;

  @IsOptional()
  @IsUUID()
  userId?: string;
}
