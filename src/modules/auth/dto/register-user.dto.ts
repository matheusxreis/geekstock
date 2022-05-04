import { IsString, IsNumber, IsNotEmpty, IsAlpha} from "class-validator"

export class RegisterUserDTO {

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    username: string

    @IsNotEmpty()
    @IsString()
    password: string

    @IsNotEmpty()
    @IsNumber()
    perfil: 1 | 2 | 3

}