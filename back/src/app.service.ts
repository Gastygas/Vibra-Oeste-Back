import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';
import { formDto } from './dto/form.dto';
import { contactDto } from './dto/contact.dto';

@Injectable()
export class AppService {
  constructor(private readonly appRepository: AppRepository){}
  getRequestService(){
    return this.appRepository.getRequestRepository();
  }
  newFormService(form: formDto) {
    return this.appRepository.newFormRepository(form)
  }

  newContactService(contact:contactDto){
    return this.appRepository.newContactRepository(contact)
  }
}
