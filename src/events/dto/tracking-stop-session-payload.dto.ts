import { IsUUID } from 'class-validator';

export class TrackingStopSessionPayloadDto {
  @IsUUID()
  eventId!: string;

  @IsUUID()
  userId!: string;

  @IsUUID()
  authUserId!: string;
}
