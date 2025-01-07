import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { formDto } from './dto/form.dto';
import { contactDto } from './dto/contact.dto';

@Controller("app")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRequest(){
    return this.appService.getRequestService();
  }
  @Post("form")
  newForm(
    @Body() form: formDto,
  ){
    return this.appService.newFormService(form)
  }
  @Post("contact")
  newContact(
    @Body() contact: contactDto
  ){
    return this.appService.newContactService(contact)
  }
}
