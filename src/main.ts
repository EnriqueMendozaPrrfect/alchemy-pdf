import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { json } from 'body-parser';

import { AppModule } from './app.module'
import { NoPortImplemented } from './errors/errors';

async function main() {
  const app = await NestFactory.create(AppModule, { cors: true })

  if (process.env.MAX_REQUEST_SIZE) app.use(json({ limit: process.env.MAX_REQUEST_SIZE }))

  if (process.env.ENVIROMENT === 'development') {
    const config = new DocumentBuilder()
      .setTitle('Convert HTML to PDF')
      .setDescription('Convert HTML to PDF')
      .setVersion('1.0')
      .addTag('convert')
      .addTag('health')
      .build();
  
    const document = SwaggerModule.createDocument(app, config)
  
    SwaggerModule.setup('docs', app, document)
  }

  if(!process.env.PORT) throw new NoPortImplemented()

  await app.listen(process.env.PORT)
}

main()
