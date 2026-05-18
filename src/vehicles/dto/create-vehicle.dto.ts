import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';

export class CreateVehicleDto {
  @IsString()
  @IsUUID()
  ownerId!: string;

  @IsString()
  name!: string;

  @IsString()
  brand!: string;

  @IsString()
  model!: string;

  @Type(() => Number)
  @IsInt()
  @Min(1900)
  year!: number;

  @Type(() => Number)
  @IsNumber()
  currentMileage!: number;

  @IsOptional()
  @IsString()
  licensePlate?: string;

  @IsOptional()
  @IsString()
  vin?: string;

  @IsOptional()
  @IsDateString()
  purchaseDate?: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsBoolean()
  isArchived?: boolean;

  @IsOptional()
  @IsString()
  engine?: string;

  @IsOptional()
  @IsString()
  horsepower?: string;

  @IsOptional()
  @IsString()
  torque?: string;

  @IsOptional()
  @IsString()
  weight?: string;
}
