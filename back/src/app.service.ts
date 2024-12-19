import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';
import { formDto } from './dto/form.dto';

@Injectable()
export class AppService {
  constructor(private readonly appRepository: AppRepository){}
  getRequestService(){
    return this.appRepository.getRequest();
  }
  newFormService(form: formDto) {
    return this.appRepository.newForm(form)
  }
}
