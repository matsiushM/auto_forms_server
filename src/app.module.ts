import {Module} from '@nestjs/common';
import {FormPartsModule} from "./formParts/formParts.module";
import {AuthModule} from './auth/auth.module';
import {UsersModule} from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";
import * as process from "node:process";
import {PassportModule} from "@nestjs/passport";


@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        MongooseModule.forRoot(process.env.DB_URI),
        FormPartsModule,
        AuthModule,
        UsersModule,
        PassportModule,
    ],
})
export class AppModule {
}
