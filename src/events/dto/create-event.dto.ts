import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
} from 'class-validator';
import { EventDifficulty, EventState, EventType } from '../enums';

export class CreateEventDto {
  @IsString()
  @IsUUID()
  ownerId!: string;

  @IsString()
  name!: string;

  @IsString()
  description!: string;

  @IsString()
  city!: string;

  @Type(() => Date)
  @IsDate()
  startDate!: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  endDate?: Date;

  @IsEnum(EventDifficulty)
  difficulty!: EventDifficulty;

  @IsString()
  meetingPoint!: string;

  @IsString()
  destination!: string;

  @Type(() => Date)
  @IsDate()
  meetingTime!: Date;

  @IsEnum(EventType)
  eventType!: EventType;

  @IsArray()
  @IsString({ each: true })
  allowedBrands!: string[];

  @IsOptional()
  @IsNumber()
  @IsPositive()
  price?: number;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsEnum(EventState)
  state: EventState = EventState.SCHEDULED;
}
