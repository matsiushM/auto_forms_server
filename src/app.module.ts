import {Module} from '@nestjs/common';
import {FormPartsModule} from "./formParts/formParts.module";
import {ConfigModule} from "@nestjs/config";
import { AuthorizationModule } from './authorization/authorization.module';


@Module({
    imports: [
        FormPartsModule,
        AuthorizationModule,
    ],
})
export class AppModule {
}
