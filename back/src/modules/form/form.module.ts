import { Module } from "@nestjs/common";
import { FormController } from "./form.controller";
import { FormService } from "./form.service";
import { FormRepository } from "./form.repository";

@Module({
    imports:[],
    controllers:[FormController],
    providers:[FormService,FormRepository]
})
export class FormModule{}