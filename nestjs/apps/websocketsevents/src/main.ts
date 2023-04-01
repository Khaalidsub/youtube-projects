import { NestFactory } from '@nestjs/core';
import { WsAdapter } from '@nestjs/platform-ws';
import { WebsocketseventsModule } from './websocketsevents.module';

async function bootstrap() {
  const app = await NestFactory.create(WebsocketseventsModule);
  app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(3000);
}
bootstrap();
