/**
 * Aggregate payload returned by GET /home (gateway).
 * Shapes match vehicles-ms Event model JSON and vehicles-ms Vehicle JSON.
 */
export class HomeResponseDto {
  mainVehicle!: Record<string, unknown> | null;
  upcomingEvents!: Record<string, unknown>[];
}
