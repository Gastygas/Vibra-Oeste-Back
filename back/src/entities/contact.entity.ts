import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
@Entity("contact")
export class Contact{
    @PrimaryGeneratedColumn("uuid")
    id:string = uuid();

    @Column({nullable:false})
    email:string;

    @Column({nullable:true})
    message:string;
}