import { IsNotEmpty, IsNumber, IsString } from "class-validator"


export class CreateProductDTO {

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsNumber()
    price: number

    @IsNotEmpty()
    @IsNumber()
    amount: number

    @IsNotEmpty()
    @IsString()
    added_by: string

    @IsNotEmpty()
    @IsString()
    category: string

}