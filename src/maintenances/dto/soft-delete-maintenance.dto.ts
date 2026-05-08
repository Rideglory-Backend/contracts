import { IsString, IsUUID } from 'class-validator';

export class SoftDeleteMaintenancePayloadDto {
  @IsUUID()
  @IsString()
  id!: string;

  @IsUUID()
  @IsString()
  vehicleId!: string;
}
