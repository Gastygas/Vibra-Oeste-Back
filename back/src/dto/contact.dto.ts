import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class contactDto {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsString()
    @IsNotEmpty()
    message:string
}