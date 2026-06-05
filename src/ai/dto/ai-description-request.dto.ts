import { Type } from 'class-transformer';
import {
  IsArray,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { AiDescriptionEventContext } from './ai-description-event-context.dto';
import { AiChatTurnDto } from './ai-chat-turn.dto';

export class AiDescriptionRequestDto {
  @ValidateNested()
  @Type(() => AiDescriptionEventContext)
  eventContext!: AiDescriptionEventContext;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AiChatTurnDto)
  history?: AiChatTurnDto[];

  @IsString()
  userMessage!: string;
}
