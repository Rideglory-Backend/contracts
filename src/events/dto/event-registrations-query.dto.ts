import { IsUUID } from 'class-validator';

export class EventRegistrationsQueryDto {
  @IsUUID()
  eventId!: string;
}

export class EventRegistrationsForUserQueryDto {
  @IsUUID()
  eventId!: string;

  @IsUUID()
  userId!: string;
}

export class MyRegistrationsQueryDto {
  @IsUUID()
  userId!: string;
}
