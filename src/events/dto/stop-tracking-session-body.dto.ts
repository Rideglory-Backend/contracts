import { IsUUID } from 'class-validator';

export class StopTrackingSessionBodyDto {
  @IsUUID()
  userId!: string;
}
