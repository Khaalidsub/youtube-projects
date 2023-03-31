import { Module } from '@nestjs/common';
import { BasicModule } from './basic/basic.module';
import { ConstConfigModule } from './const-config/const-config.module';

@Module({
  imports: [BasicModule, ConstConfigModule],
})
export class ConfigurationsModule {}
