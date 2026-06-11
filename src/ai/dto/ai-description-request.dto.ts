import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
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
  @ArrayMaxSize(10)
  @ValidateNested({ each: true })
  @Type(() => AiChatTurnDto)
  history?: AiChatTurnDto[];

  @IsString()
  userMessage!: string;
}
