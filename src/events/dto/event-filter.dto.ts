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

}

/** Payload forwarded from api-gateway → events-ms via TCP MessagePattern */
export class FindAllEventsPayloadDto extends EventFilterDto {
  /** Firebase UID del usuario autenticado, usado para filtrar eventos IN_PROGRESS */
  @IsOptional()
  @IsString()
  authUserId?: string;
}

/** Payload forwarded for upcoming events */
export class FindUpcomingEventsPayloadDto extends EventFilterDto {
  @IsOptional()
  limit?: number;

  /** Firebase UID del usuario autenticado; permite priorizar eventos IN_PROGRESS en los que participa */
  @IsOptional()
  @IsString()
  authUserId?: string;
}
