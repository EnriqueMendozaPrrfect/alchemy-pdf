import { Test, TestingModule } from '@nestjs/testing';
import { InternalServerErrorException, StreamableFile } from '@nestjs/common';

import Converter from './drivers/converter';
import DriverConverter from './drivers';
import { ConvertController } from './convert.controller';
import { ConvertDto } from './dto/convert.dto';
import { ConvertService } from './convert.service';

describe('ConvertController', () => {
  let controller: ConvertController;
  let driver: Converter;

  beforeEach(async () => {
    jest.clearAllMocks();

    process.env.DRIVER_CONVERTER = 'dummy';

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConvertController],
      providers: [
        {
          provide: 'CONVERT_SERVICE',
          useFactory(): ConvertService {
            driver = DriverConverter.getDriver();
    
            return new ConvertService(driver);
          }
        }
      ]

    }).compile();

    controller = module.get<ConvertController>(ConvertController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should convert html file to pdf file', async () => {
    const htmlData = new ConvertDto();
    const file = await controller.convertHTMLtoPDF(htmlData);

    expect(file).toBeInstanceOf(StreamableFile);
    expect(file.options.type).toBe('.pdf');
  });

  it('should throw with "InternalServerErrorException" on error during converting', async () => {
    const mock = jest.spyOn(driver, 'fromHTML');

    mock.mockImplementation(() => {
      throw new Error('this is a fake error')
    })

    const htmlData = new ConvertDto();
    const getFile = async () => await controller.convertHTMLtoPDF(htmlData);

    expect(getFile).rejects.toThrow(InternalServerErrorException);
    expect(getFile).rejects.toThrow('An unexpected error occurred while requesting');
  });

  it('should throw with "InternalServerErrorException" on throw during converting', async () => {
    const mock = jest.spyOn(driver, 'fromHTML');

    mock.mockImplementation(() => {
      throw 'this is a fake error'
    })

    const htmlData = new ConvertDto();
    const getFile = async () => await controller.convertHTMLtoPDF(htmlData);

    expect(getFile).rejects.toThrow(InternalServerErrorException);
    expect(getFile).rejects.toThrow('An unexpected error occurred while requesting');
  });
});
