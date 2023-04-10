import { Module } from '@nestjs/common';
import { BasicController } from './basic.controller';

@Module({
  imports: [],
  controllers: [BasicController],
})
export class BasicModule {}
