import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("app")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(){
    return this.appService.getHello();
  }
  @Post("form")
  newForm(
    @Body() form,
  ){
    return this.appService.newFormService(form)
  }
}
