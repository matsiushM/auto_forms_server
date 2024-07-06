import { Module } from '@nestjs/common';
import { LoadPartsController } from './load-parts.controller';

@Module({
  controllers: [LoadPartsController]
})
export class LoadPartsModule {}
