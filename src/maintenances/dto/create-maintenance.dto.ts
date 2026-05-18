import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';
import { MaintenanceMode, MaintenanceType } from '../enums';

export class CreateMaintenanceDto {
  @IsUUID()
  @IsString()
  userId!: string;

  @IsUUID()
  @IsString()
  vehicleId!: string;

  @IsEnum(MaintenanceType)
  type!: MaintenanceType;

  @IsEnum(MaintenanceMode)
  mode!: MaintenanceMode;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  serviceDate?: Date;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  odometerAtService?: number;

  @IsOptional()
  @IsString()
  workshop?: string;

  @IsOptional()
  @IsString()
  notes?: string;

  // nextKmInterval: relative interval; backend computes nextOdometer = odometerAtService + nextKmInterval
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100000)
  nextKmInterval?: number;

  // nextOdometer: absolute odometer value for next service (used directly when provided)
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  @Max(99999999)
  nextOdometer?: number;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  nextDate?: Date;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(99999999)
  cost?: number;
}
