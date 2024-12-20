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

    @Column({type:"text",default:0})
    speakers:string;

    @Column({type:"text",default:0})
    console:string;

    @Column({type:"text",default:0})
    microphones:string;

    @Column({ type: 'varchar', default:"none",  })
    lat: string;
  
    @Column({ type: 'varchar', default:"none" })
    lng: string;
}