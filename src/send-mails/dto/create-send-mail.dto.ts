import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  ValidateNested,
  IsArray,
  ArrayMinSize,
} from 'class-validator';

export class CreateSendMailDto {
  @IsString()
  @IsNotEmpty()
  subject: string;

  @IsString()
  @IsNotEmpty()
  body: string;

  @IsNotEmpty({ each: true })
  @IsString({ each: true })
  @IsArray()
  @ArrayMinSize(1)
  emails: string[];
}

export class KafkaCreateDto {
  @Type(() => CreateSendMailDto)
  @ValidateNested()
  @IsNotEmpty()
  value: CreateSendMailDto;
}
