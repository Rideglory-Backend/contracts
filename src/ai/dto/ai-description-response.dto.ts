// Composite DTO: control field + domain data; no 1:1 domain model
export class AiDescriptionResponseDto {
  markdown!: string;
  remainingGenerations!: number;
  isDescription!: boolean;
}
