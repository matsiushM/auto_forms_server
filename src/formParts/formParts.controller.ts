import { Controller, Post, Body } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Controller()
export class FormPartsController {
  constructor(private httpService: HttpService) {}

  @Post('/data')
  async handleData(@Body() data: any) {
    try {
      const url = 'http://178.124.201.2/InfoBase/hs/Zagruzka/Stoks/json';
      const authHeader = 'Basic ' + Buffer.from('111:').toString('base64');

      const response: Observable<any> = this.httpService.post(url, data, {
        headers: {
          Authorization: authHeader,
        },
      }).pipe(
        catchError(error => {
          console.error('Error sending data:', error.response?.data || error.message);
          throw error;
        })
      );

      response.subscribe({
        next: responseData => {
          console.log('Response from external API:', responseData.data);
        },
        error: error => {
          console.error('Error sending data:', error.response?.data || error.message);
          throw error;
        }
      });

      return { message: 'Data sent to external API successfully' };
    } catch (error) {
      console.error('Error sending data:', error.response?.data || error.message);
      throw error;
    }
  }

  @Post('/dataPhoto')
  async handleDataPhoto(@Body() data: any) {
    console.log('Response from external API:', data);
    try {
      const url = 'http://178.124.201.2/InfoBase/hs/Zagruzka/StoksPOST_Foto/json';
      const authHeader = 'Basic ' + Buffer.from('111:').toString('base64');

      const response: Observable<any> = this.httpService.post(url, data, {
        headers: {
          Authorization: authHeader,
        },
      }).pipe(
          catchError(error => {
            console.error('Error sending data:', error.response?.data || error.message);
            throw error;
          })
      );

      response.subscribe({
        next: responseData => {
          console.log('Response from external API:', responseData.data);
        },
        error: error => {
          console.error('Error sending data:', error.response?.data || error.message);
          throw error;
        }
      });

      return { message: 'Data sent to external API successfully' };
    } catch (error) {
      console.error('Error sending data:', error.response?.data || error.message);
      throw error;
    }
  }
}
