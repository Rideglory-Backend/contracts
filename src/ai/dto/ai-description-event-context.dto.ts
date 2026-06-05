import { IsEnum, IsOptional, IsString } from 'class-validator';
import { EventType } from '../../events/enums';

export class AiDescriptionEventContext {
  @IsString()
  title!: string;

  @IsEnum(EventType)
  eventType!: EventType;

  @IsString()
  city!: string;

  @IsOptional()
  @IsString()
  difficulty?: string;

  @IsOptional()
  @IsString()
  startDate?: string;
}
