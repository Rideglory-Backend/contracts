import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { MaintenanceType } from '../enums';

export class CreateMaintenanceDto {
  @IsUUID()
  @IsString()
  userId!: string;

  @IsUUID()
  @IsString()
  vehicleId!: string;

  @IsString()
  name!: string;

  @IsEnum(MaintenanceType)
  type!: MaintenanceType;

  @IsOptional()
  @IsString()
  notes?: string;

  @Type(() => Date)
  @IsDate()
  date!: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  nextMaintenanceDate?: Date;

  @Type(() => Number)
  @IsInt()
  maintanceMileage!: number;

  @IsBoolean()
  receiveAlert!: boolean;

  @IsOptional()
  @IsBoolean()
  receiveMileageAlert?: boolean;

  @IsOptional()
  @IsBoolean()
  receiveDateAlert?: boolean;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  nextMaintenanceMileage?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  cost?: number;
}
