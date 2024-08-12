import { Controller, Get } from '@nestjs/common';

import { HealthService } from './health.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('health')
@ApiTags('health')
export class HealthController {
  constructor(private readonly healtService: HealthService) {}

  @Get('/')
  @ApiOkResponse({
    schema: {
      example: 'OK'
    },
    description: 'This endpoint shoud response ok when the servide is online'
  })
  lives(): string {
    return this.healtService.lives()
  }
}
