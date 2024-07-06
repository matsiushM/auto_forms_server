import { Module } from '@nestjs/common';
import { LoadPartsController } from './load-parts.controller';
import {HttpModule} from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  controllers: [LoadPartsController]
})
export class LoadPartsModule {}
