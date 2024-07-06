import {Module} from '@nestjs/common';
import {FormPartsModule} from "./formParts/formParts.module";
import { AuthorizationModule } from './authorization/authorization.module';
import { LoadPartsModule } from './load-parts/load-parts.module';


@Module({
    imports: [
        FormPartsModule,
        AuthorizationModule,
        LoadPartsModule,
    ],
})
export class AppModule {
}
