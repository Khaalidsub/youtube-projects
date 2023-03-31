import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BasicController } from './basic.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      // Load .env file
      //   envFilePath: '.env',
    }),
  ],

  controllers: [BasicController],
})
export class BasicModule {}
