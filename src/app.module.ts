import { Module } from '@nestjs/common';
import {FormPartsModule} from "./formParts/formParts.module";


@Module({
  imports: [FormPartsModule],
})
export class AppModule {}
