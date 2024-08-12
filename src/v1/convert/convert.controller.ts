import {
  Body,
  Controller,
  Header,
  Inject,
  Injectable,
  InternalServerErrorException,
  Post,
  StreamableFile,
  ValidationPipe
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConsumes,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags
} from '@nestjs/swagger';

import { ConvertService } from './convert.service';
import { ConvertDto } from './dto/convert.dto';
import { BadRequestSchema, InternalServerErrorSchema, SuccessfulSchema } from './convert.schemas';

@Controller('convert')
@ApiTags('convert')
@Injectable()
export class ConvertController {
  constructor(@Inject('CONVERT_SERVICE') private convertService: ConvertService) {}

  @Post('/')
  @Header('content-type', 'application/pdf')
  @ApiConsumes('application/json')
  @ApiCreatedResponse(SuccessfulSchema)
  @ApiBadRequestResponse(BadRequestSchema)
  @ApiInternalServerErrorResponse(InternalServerErrorSchema)
  async convertHTMLtoPDF(@Body(ValidationPipe) convertDto: ConvertDto): Promise<StreamableFile> {
    try {
      return await this.convertService.convertHTMLtoPDF(convertDto)
    } catch (error) {
      if (error instanceof Error) {
        throw new InternalServerErrorException(
          'An unexpected error occurred while requesting',
          { cause: error, description: error.message }
        )
      } else {
        throw new InternalServerErrorException('An unexpected error occurred while requesting')
      }
    }
  }
}
