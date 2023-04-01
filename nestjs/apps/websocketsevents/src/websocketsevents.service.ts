import { Injectable } from '@nestjs/common';

@Injectable()
export class WebsocketseventsService {
  getHello(): string {
    return 'Hello World!';
  }
}
