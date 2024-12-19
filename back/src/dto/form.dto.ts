import { IsNotEmpty, IsString } from "class-validator";

export class formDto {
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    surname:string;

    @IsString()
    @IsNotEmpty()
    telephone:string;

    @IsString()
    @IsNotEmpty()
    address:string;

    @IsString()
    lat?:string

    @IsString()
    lng?:string
}