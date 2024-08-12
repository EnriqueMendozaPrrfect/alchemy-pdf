import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { V1Module } from './v1/v1.module';
import { HealthService } from './health/health.service';
import { HealthController } from './health/health.controller';

@Module({
  imports: [
    V1Module,
    RouterModule.register([
      {
        path: 'v1',
        module: V1Module
      }
    ]),
    ConfigModule.forRoot({ envFilePath: '.env'})
  ],
  controllers: [AppController, HealthController],
  providers: [HealthService],
})

export class AppModule {}
