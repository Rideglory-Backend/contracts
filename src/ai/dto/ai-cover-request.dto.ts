// Composite DTO: request-only; no 1:1 domain model (Pattern B exception — rideglory-coding-standards §DTOs)
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class AiCoverRequestDto {
  @IsString()
  @IsNotEmpty()
  prompt!: string;

  @IsUUID()
  draftId!: string;
}
