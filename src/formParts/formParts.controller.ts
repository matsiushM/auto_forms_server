import {Controller, Post, Body, Get, Query, HttpException, HttpStatus, Res} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import {firstValueFrom, Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Response } from 'express';

@Controller()
export class FormPartsController {
  constructor(private httpService: HttpService) {
  }

  @Post('/data')
  async handleData(@Body() data: any, @Res() res: Response) {
      const url = 'http://178.124.201.2/InfoBase/hs/Zagruzka/Stoks/json';
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

  @Post('/dataPhoto')
  async handleDataPhoto(@Body() data: any, @Res() res: Response) {
      const url = 'http://178.124.201.2/InfoBase/hs/Zagruzka_Foto/stoks_Foto/json';
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
        console.error('Error sending dataPhoto:', error.response?.data || error.message);
        res.status(error.response.status).send();
      }
    });
  }

  @Get('/searchAuto')
  async handleSearchAuto(@Query() query: any, @Res() res: Response) {
    try {
      const url = 'http://178.124.201.2/InfoBase/hs/Zagruzka_Kod/stoks_Kod/json';
      const authHeader = 'Basic ' + Buffer.from('111:').toString('base64');

      const response = await firstValueFrom(
          this.httpService.post(url, query, {
            headers: {
              Authorization: authHeader,
            },
          }).pipe(
              catchError(error => {
                console.error('Error sending data:', error.response?.data || error.message);
                throw new HttpException({
                  status: HttpStatus.BAD_REQUEST,
                  error: 'Error sending data',
                  message: error.response?.data || error.message,
                }, HttpStatus.BAD_REQUEST);
              })
          )
      );

      console.log('Response from external API:', response.data);
      return response.data;

    } catch (error) {
      console.error('Unexpected error:', error.message);
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'Unexpected error',
        message: error.message,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
