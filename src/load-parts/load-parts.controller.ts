import {Body, Controller, Post, Res} from '@nestjs/common';
import {Response} from "express";
import {Observable} from "rxjs";
import {HttpService} from "@nestjs/axios";

@Controller('load-parts')
export class LoadPartsController {
    constructor(private httpService: HttpService) {
    }

    @Post('/loadParts')
    async handleData(@Body() data: any, @Res() res: Response) {
        const url = 'http://178.124.201.2/InfoBase/hs/ZaprosList/stoks_List/json';
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

    @Post('/sendIdParts')
    async sendIdParts(@Body() data: any, @Res() res: Response) {
        const url = 'http://178.124.201.2/InfoBase/hs/ZaprosZapch/stoks_Zapch/json';
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
}
