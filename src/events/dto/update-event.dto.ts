import { PartialType } from '@nestjs/mapped-types';
import { IsUUID } from 'class-validator';
import { CreateEventDto } from './create-event.dto';

export class UpdateEventDto extends PartialType(CreateEventDto) {}

export class UpdateEventPayloadDto extends UpdateEventDto {
  @IsUUID()
  id!: string;
}
