import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConstConfigController } from './const-config.controller';

@Module({
  imports: [ConfigModule.forRoot({})],
  controllers: [ConstConfigController],
})
export class ConstConfigModule {}
