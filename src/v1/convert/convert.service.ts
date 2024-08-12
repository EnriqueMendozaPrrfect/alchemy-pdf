import { Injectable, StreamableFile } from '@nestjs/common';

import Converter from './drivers/converter';
import { ConvertDto } from './dto/convert.dto';

@Injectable()
export class ConvertService {
  private readonly converter: Converter;

  constructor(converter: Converter) {
    this.converter = converter;
  }

  async convertHTMLtoPDF(convert: ConvertDto): Promise<StreamableFile> {
    const file = await this.converter.fromHTML(convert);

    return new StreamableFile(file, { type: '.pdf'});
  }
}
