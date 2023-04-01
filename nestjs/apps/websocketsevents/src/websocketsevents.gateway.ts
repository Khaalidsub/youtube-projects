import { Controller, Get } from '@nestjs/common';
import {
  MessageBody,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { from, map } from 'rxjs';
import { WebsocketseventsService } from './websocketsevents.service';
import { Server } from 'ws';
@WebSocketGateway(3062)
export class WebsocketseventsGateway implements OnGatewayInit {
  @WebSocketServer()
  server: Server;
  constructor(
    private readonly websocketseventsService: WebsocketseventsService,
  ) {}
  afterInit(server: any) {
    // throw new Error('Method not implemented.');
    console.log('afterInit');
  }

  //! for sending from the client side
  //websocket.send(JSON.stringify({event:"message",data:"Test"}))
  @SubscribeMessage('message')
  handleEvent(@MessageBody() data: unknown) {
    console.log('data', data);

    return from([1, 2, 3]).pipe(
      map((item) => ({ event: 'events', data: item })),
    );
  }

  //! recieve message from server
  //websocket.onmessage = message => console.log("received data",message)
}
