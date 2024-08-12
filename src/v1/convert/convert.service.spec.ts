import { StreamableFile } from '@nestjs/common';

import DriverConverter from './drivers';
import { ConvertService } from './convert.service';
import { ConvertDto } from './dto/convert.dto';

describe('ConvertService', () => {
  let service: ConvertService;

  beforeEach(() => {
    process.env.DRIVER_CONVERTER = 'dummy';

    const driver = DriverConverter.getDriver();

    service = new ConvertService(driver);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should convert html file to pdf file', async () => {
    const htmlData = new ConvertDto();
    const file = await service.convertHTMLtoPDF(htmlData);

    expect(file).toBeInstanceOf(StreamableFile);
    expect(file.options.type).toBe('.pdf');
  });
});
