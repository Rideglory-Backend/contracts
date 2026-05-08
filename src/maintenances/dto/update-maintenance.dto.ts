import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsUUID } from 'class-validator';
import { CreateMaintenanceDto } from './create-maintenance.dto';

export class UpdateMaintenanceDto extends PartialType(CreateMaintenanceDto) {}

export class UpdateMaintenancePayloadDto extends UpdateMaintenanceDto {
  @IsUUID()
  @IsString()
  id!: string;

  @IsUUID()
  @IsString()
  vehicleId!: string;
}
