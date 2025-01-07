import { Repository } from "typeorm";
import { Form } from "./entities/form.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { formDto } from "./dto/form.dto";
import { Contact } from "./entities/contact.entity";
import { contactDto } from "./dto/contact.dto";

export class AppRepository {
    constructor(
        @InjectRepository(Form)
        private readonly formRepository: Repository<Form>,
        @InjectRepository(Contact)
        private readonly contactRepository: Repository<Contact>
    ){}

  async getRequestRepository():Promise<Form[]> {
      const requests = await this.formRepository.find()
      return requests;
    }
  async newFormRepository(form: formDto):Promise<{success:string}> {
    const newForm = this.formRepository.create(form)
    await this.formRepository.save(newForm)

    return {success: "form created"}
  }

  async newContactRepository(contact: contactDto){
    const newContacts = this.contactRepository.create(contact)
    await this.contactRepository.save(newContacts)
    return {success: "contact uploaded"}
  }

}