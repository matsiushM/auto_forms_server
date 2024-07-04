import { Module } from '@nestjs/common';
import { AuthorizationController } from './authorization.controller';
import {HttpModule} from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  controllers: [AuthorizationController]
})
export class AuthorizationModule {}
