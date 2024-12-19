import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';


@Entity({name:"form"})
export class Form{
    @PrimaryGeneratedColumn("uuid")
    id:string = uuid()

    @Column({type:'text', nullable:false})
    name:string;

    @Column({type:'text', nullable:false})
    surname:string;

    @Column({type:'text', nullable:false})
    telephone:string;

    @Column({type:'text', nullable:false})
    address:string;
}