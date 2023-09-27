import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http.exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  // * Dev, Product Mode 설정
  // const isDev = process.env.NODE_ENV === 'dev';

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

  // * CORS
  app.enableCors({
    origin: true,
    credentials: true,
    exposedHeaders: ['Authorization'], // * 사용할 헤더 추가.
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Harang API Document')
    .setDescription('Harang API 명세서')
    .setVersion('1.0.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'JWT 토큰',
        in: 'header',
      },
      'Authorization',
    )
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, swaggerDocument);

  // app.use(passport.initialize());

  await app.listen(3000);
}
bootstrap();
