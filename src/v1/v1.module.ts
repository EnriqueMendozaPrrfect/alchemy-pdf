import { Module } from '@nestjs/common';

import DriverConverter from './convert/drivers';
import { ConvertController } from './convert/convert.controller';
import { ConvertService } from './convert/convert.service';
import { V1Controller } from './v1.controller';

@Module({
  controllers: [V1Controller, ConvertController],
  providers: [
    {
      provide: 'CONVERT_SERVICE',
      useFactory(): ConvertService {
        const driver = DriverConverter.getDriver();

        return new ConvertService(driver);
      }
    }
  ]
})

export class V1Module {}
