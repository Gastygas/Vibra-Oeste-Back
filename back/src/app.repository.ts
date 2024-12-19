import { Repository } from "typeorm";
import { Form } from "./entities/form.entity";
import { InjectRepository } from "@nestjs/typeorm";

export class AppRepository {
    constructor(
        @InjectRepository(Form)
        private readonly formRepository: Repository<Form>
    ){}
  async newForm(form: Form) {
    const newForm = this.formRepository.create(form)
    await this.formRepository.save(newForm)

    return {success: "form created"}
  }

}