import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove fields not in DTO
      forbidNonWhitelisted: true, // Throw error for unknown fields
      transform: true, // Auto-convert types (e.g. string to number)
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();