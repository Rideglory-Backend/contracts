// Composite DTO: control field + domain data; no 1:1 domain model (Pattern B exception — rideglory-coding-standards §DTOs)
export class AiCoverResponseDto {
  imageUrl!: string;
  remainingGenerations!: number; // -1 sentinel; cuota real en Fase 3
}
