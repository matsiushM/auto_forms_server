import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {User} from "../users/shemas/user.shema";
import * as mongoose from "mongoose";

@Injectable()
export class PartsService {
    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>,
    ) {}

    async getAllParts(): Promise<User[]> {
        return this.userModel.find();
    }
}