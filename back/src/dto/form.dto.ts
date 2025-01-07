import { IsNotEmpty, IsOptional, IsString } from "class-validator";

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
    @IsOptional()
    speakers?:string;

    @IsString()
    @IsOptional()
    console?:string;

    @IsString()
    @IsOptional()
    microphones?:string

    @IsString()
    @IsOptional()
    lat?:string

    @IsString()
    @IsOptional()
    lng?:string
}