import {Module} from '@nestjs/common';
import { FormPartsController } from './formParts.controller';
import { HttpModule } from '@nestjs/axios';


@Module({
    imports: [HttpModule],
    controllers: [FormPartsController],
})
export class FormPartsModule {
}