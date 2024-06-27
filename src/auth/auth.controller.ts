import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import {AuthService} from "./auth.service";
import {JwtAuthGuard} from "./local-auth.guard";

@Controller()
export class AppController {
    constructor(private authService: AuthService) {}

    @UseGuards(JwtAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}