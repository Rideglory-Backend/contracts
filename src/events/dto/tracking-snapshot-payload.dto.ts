import { IsUUID } from 'class-validator';

export class TrackingSnapshotPayloadDto {
  @IsUUID()
  eventId!: string;
}
