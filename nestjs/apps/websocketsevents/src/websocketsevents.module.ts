import { Module } from '@nestjs/common';
import { WebsocketseventsController } from './websocketsevents.controller';
import { WebsocketseventsGateway } from './websocketsevents.gateway';
import { WebsocketseventsService } from './websocketsevents.service';

@Module({
  imports: [],
  controllers: [WebsocketseventsController],
  providers: [WebsocketseventsService, WebsocketseventsGateway],
})
export class WebsocketseventsModule {}
