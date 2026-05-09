import { IsUUID } from 'class-validator';

export class SetMainVehiclePayloadDto {
  @IsUUID()
  ownerId!: string;

  @IsUUID()
  vehicleId!: string;
}
