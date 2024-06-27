import {Controller, Get} from "@nestjs/common";
import {User, UsersService} from "../users/users.service";
import {PartsService} from "./parts.service";

@Controller('parts')
export class PartsController {
    constructor(private partsService: PartsService) {}

    @Get()
    async getUsers(): Promise<User[]> {
        return this.partsService.getAllParts();
    }
}