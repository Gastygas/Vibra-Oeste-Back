import { Repository } from "typeorm";
import { Form } from "./entities/form.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { formDto } from "./dto/form.dto";

export class AppRepository {
    constructor(
        @InjectRepository(Form)
        private readonly formRepository: Repository<Form>
    ){}

  async getRequest():Promise<Form[]> {
      const requests = await this.formRepository.find()
      return requests;
    }
  async newForm(form: formDto) {
    const newForm = this.formRepository.create(form)
    await this.formRepository.save(newForm)

    return {success: "form created"}
  }

}