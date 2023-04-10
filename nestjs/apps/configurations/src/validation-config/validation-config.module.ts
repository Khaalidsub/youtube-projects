import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ValidationConfigController } from './validation-config.controller';

@Module({
  imports: [ConfigModule.forRoot({})],
  controllers: [ValidationConfigController],
})
export class ValidationConfigModule {}
