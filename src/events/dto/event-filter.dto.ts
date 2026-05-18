import { IsEnum, IsISO8601, IsOptional, IsString } from 'class-validator';
import { EventType } from '../enums';

export class EventFilterDto {
  @IsOptional()
  @IsEnum(EventType)
  type?: EventType;

  @IsOptional()
  @IsISO8601()
  dateFrom?: string;

  @IsOptional()
  @IsISO8601()
  dateTo?: string;

  @IsOptional()
  @IsString()
  city?: string;
}

/** Payload forwarded from api-gateway → events-ms via TCP MessagePattern */
export class FindAllEventsPayloadDto extends EventFilterDto {}

/** Payload forwarded for upcoming events */
export class FindUpcomingEventsPayloadDto extends EventFilterDto {
  @IsOptional()
  limit?: number;
}
