import { Type } from 'class-transformer';
import { IsInt, IsNumber, IsUUID } from 'class-validator';

export class TrackingUpdateLocationPayloadDto {
  @IsUUID()
  eventId!: string;

  @IsUUID()
  userId!: string;

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

  @IsUUID()
  authUserId!: string;
}
