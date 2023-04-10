import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from './config/config';
import { ValidationConfigController } from './validation-config.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      validate: config,
    }),
  ],
  controllers: [ValidationConfigController],
})
export class ValidationConfigModule {}
