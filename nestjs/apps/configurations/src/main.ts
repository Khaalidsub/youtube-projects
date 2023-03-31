import { NestFactory } from '@nestjs/core';
import { ConfigurationsModule } from './configurations.module';

async function bootstrap() {
  const app = await NestFactory.create(ConfigurationsModule);
  await app.listen(3000);
}
bootstrap();
