import { IsEnum, IsString } from 'class-validator';
import { AiChatRole } from '../enums/ai.enums';

export class AiChatTurnDto {
  @IsEnum(AiChatRole)
  role!: AiChatRole;

  @IsString()
  content!: string;
}
