import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsUUID } from 'class-validator';
import { CreateVehicleDto } from './create-vehicle.dto';

export class UpdateVehicleDto extends PartialType(CreateVehicleDto) {}

export class UpdateVehiclePayloadDto extends UpdateVehicleDto {
  @IsString()
  @IsUUID()
  id!: string;
}
