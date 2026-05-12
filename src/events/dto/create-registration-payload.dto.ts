import { IsUUID } from 'class-validator';
import { CreateRegistrationDto } from './create-registration.dto';

export class CreateRegistrationPayloadDto extends CreateRegistrationDto {
  @IsUUID()
  userId!: string;
}
