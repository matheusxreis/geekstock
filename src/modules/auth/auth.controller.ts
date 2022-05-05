import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res, ValidationPipe} from "@nestjs/common";
import { Response } from "express";
import { AuthService } from "./auth.service";
import { RegisterUserDTO } from "./dto/register-user.dto";


@Controller('/auth')
export class AuthController {

constructor(private readonly authService: AuthService){}


@Post("/login")
login(@Body() username: string, password:string){
    return this.authService.login(username, password)
}


@Post("/register")    
register(@Body(new ValidationPipe()) registerUser: RegisterUserDTO){
        this.authService.register(registerUser)



}

@Get("/teste")
listUser():RegisterUserDTO[]{
    return this.authService.users
}


}