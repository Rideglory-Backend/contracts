import { Type } from 'class-transformer';
import { IsUUID, ValidateNested } from 'class-validator';
import { RiderTrackingDto } from './rider-tracking.dto';

export class TrackingStartSessionPayloadDto {
  @IsUUID()
  eventId!: string;

  @ValidateNested()
  @Type(() => RiderTrackingDto)
  rider!: RiderTrackingDto;

  @IsUUID()
  authUserId!: string;
}
