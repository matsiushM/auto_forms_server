import { Injectable } from '@nestjs/common';

@Injectable()
export class FormPartsService {
  getHello(): string {
    return 'Hello World!';
  }
}
