import { IsUUID } from 'class-validator';
import { UpdateRegistrationDto } from './update-registration.dto';

export class UpdateRegistrationPayloadDto extends UpdateRegistrationDto {
  @IsUUID()
  registrationId!: string;

  @IsUUID()
  userId!: string;
}
