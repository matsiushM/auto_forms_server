import {Module} from '@nestjs/common';
import {FormPartsModule} from "./formParts/formParts.module";
import { AuthorizationModule } from './authorization/authorization.module';


@Module({
    imports: [
        FormPartsModule,
        AuthorizationModule,
    ],
})
export class AppModule {
}
