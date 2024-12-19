import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';

@Injectable()
export class AppService {
  constructor(private readonly appRepository: AppRepository){}
  getHello(): string {
    return 'Hello World! woold';
  }
  newFormService(form: any) {
    return this.appRepository.newForm(form)
  }
}
