import { Transform } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsISO8601, IsOptional } from 'class-validator';
import { MaintenanceSortBy, MaintenanceType } from '../enums';

export class FindMaintenancesFilterDto {
  @IsOptional()
  @IsArray()
  @IsEnum(MaintenanceType, { each: true })
  @Transform(({ value }) =>
    value === undefined ? undefined : Array.isArray(value) ? value : [value],
  )
  types?: MaintenanceType[];

  @IsOptional()
  @IsISO8601()
  startDate?: string;

  @IsOptional()
  @IsISO8601()
  endDate?: string;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true' || value === true)
  urgentOnly?: boolean;

  @IsOptional()
  @IsEnum(MaintenanceSortBy)
  sortBy?: MaintenanceSortBy;
}
