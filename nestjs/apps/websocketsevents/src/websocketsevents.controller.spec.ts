import { Test, TestingModule } from '@nestjs/testing';
import { WebsocketseventsController } from './websocketsevents.gateway';
import { WebsocketseventsService } from './websocketsevents.service';

describe('WebsocketseventsController', () => {
  let websocketseventsController: WebsocketseventsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WebsocketseventsController],
      providers: [WebsocketseventsService],
    }).compile();

    websocketseventsController = app.get<WebsocketseventsController>(
      WebsocketseventsController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(websocketseventsController.getHello()).toBe('Hello World!');
    });
  });
});
