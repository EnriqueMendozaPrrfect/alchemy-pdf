import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString
} from 'class-validator';

import { FormatsSizes } from './enums';

export class ConvertDto {
  @ApiProperty({ example: '<html></html>'})
  @IsString()
  @IsNotEmpty()
  file: string

  @ApiPropertyOptional({ example: FormatsSizes.A4, enum: FormatsSizes })
  @IsEnum(FormatsSizes)
  @IsNotEmpty()
  @IsOptional()
  format?: FormatsSizes = FormatsSizes.A4

  @ApiPropertyOptional({ example: false})
  @IsBoolean()
  @IsNotEmpty()
  @IsOptional()
  landscape?: boolean = false

  @ApiPropertyOptional({ example: { top: '5px', right: '5px', bottom: '5px', left: '5px' }})
  @IsObject()
  @IsNotEmpty()
  @IsOptional()
  margin?: {
    top?: string | number,
    right?: string | number,
    bottom?: string | number,
    left?: string | number
  } = {
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  }
}
