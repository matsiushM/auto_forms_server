import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {UserSchemas} from "../users/shemas/user.shema";
import {UsersService} from "../users/users.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: "User", schema: UserSchemas }])],
    providers: [UsersService],
})
export class UserModule {}