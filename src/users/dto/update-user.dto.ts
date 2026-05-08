import { OmitType, PartialType } from '@nestjs/mapped-types';
import { IsString, IsUUID } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(
  OmitType(CreateUserDto, ['email'] as const),
) {}

export class UpdateUserPayloadDto extends UpdateUserDto {
  @IsString()
  @IsUUID()
  id!: string;
}
