import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { RiderTrackingDto } from './rider-tracking.dto';

export class StartTrackingSessionBodyDto {
  @ValidateNested()
  @Type(() => RiderTrackingDto)
  rider!: RiderTrackingDto;
}
