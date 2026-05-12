import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsIn,
  IsInt,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export type RiderTrackingRoleValue = 'lead' | 'rider';

export class RiderTrackingDto {
  @IsUUID()
  userId!: string;

  @IsString()
  fullName!: string;

  @IsIn(['lead', 'rider'])
  role!: RiderTrackingRoleValue;

  @IsNumber()
  @Type(() => Number)
  latitude!: number;

  @IsNumber()
  @Type(() => Number)
  longitude!: number;

  @IsNumber()
  @Type(() => Number)
  speedKmh!: number;

  @IsNumber()
  @Type(() => Number)
  distanceMeters!: number;

  @IsInt()
  batteryPercent!: number;

  @IsBoolean()
  isActive!: boolean;

  @IsString()
  deviceLabel!: string;

  @Type(() => Date)
  @IsDate()
  lastUpdated!: Date;
}
