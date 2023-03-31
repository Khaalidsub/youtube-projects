import { Module } from '@nestjs/common';
import { BasicModule } from './basic/basic.module';

@Module({
  imports: [BasicModule],
})
export class ConfigurationsModule {}
