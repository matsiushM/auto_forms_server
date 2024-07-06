import {Module} from '@nestjs/common';
import {FormPartsModule} from "./formParts/formParts.module";
import { AuthorizationModule } from './authorization/authorization.module';
import { LoadPartsModule } from './load-parts/load-parts.module';
import {HttpModule} from "@nestjs/axios";


@Module({
    imports: [
        FormPartsModule,
        AuthorizationModule,
        LoadPartsModule,
    ],
})
export class AppModule {
}
