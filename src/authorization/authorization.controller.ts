import {Body, Controller, Post, Res} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {Observable} from "rxjs";
import { Response } from 'express';

@Controller('authorization')
export class AuthorizationController {
    constructor(private httpService: HttpService) {
    }

    @Post('/loadLogin')
    async loadLogin(@Res() res: Response) {
        const data = JSON.stringify( {test: "dghsghd"});
        const url = 'http://178.124.201.2/InfoBase/hs/ZaprosUsers/stoks_Users/json';
        const authHeader = 'Basic ' + Buffer.from('111:').toString('base64');
        const response: Observable<any> = this.httpService.post(url, data, {
            headers: {
                Authorization: authHeader,
            },
        });

        response.subscribe({
            next: responseData => {
                console.log('Response from external API:', responseData.message);
                res.status(responseData.status).send(responseData.data);
            },
            error: error => {
                console.error('Error sending data:', error.response?.data || error.message);
                res.status(error.response.status).send();
            }
        });
    }

    @Post('/login')
    async login(@Res() res: Response,@Body() data: any) {
        const url = 'http://178.124.201.2/InfoBase/hs/ZaprosUsersAnswer/stoks_UsersAnswer/json';
        const authHeader = 'Basic ' + Buffer.from('111:').toString('base64');
        const response: Observable<any> = this.httpService.post(url, data, {
            headers: {
                Authorization: authHeader,
            },
        });

        response.subscribe({
            next: responseData => {
                console.log('Response from external API:', responseData.data);
                res.status(responseData.status).send(responseData.data);
            },
            error: error => {
                console.error('Error sending data:', error.response?.data || error.message);
                res.status(error.response.status).send();
            }
        });
    }
}
