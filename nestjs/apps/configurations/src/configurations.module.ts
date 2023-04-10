import { Module } from '@nestjs/common';
import { BasicModule } from './basic/basic.module';
import { ConstConfigModule } from './const-config/const-config.module';
import { ValidationConfigModule } from './validation-config/validation-config.module';

@Module({
  imports: [BasicModule, ConstConfigModule, ValidationConfigModule],
})
export class ConfigurationsModule {}
