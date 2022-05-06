import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res, UseGuards, ValidationPipe} from "@nestjs/common";
import { Response } from "express";
import { AuthService } from "./auth.service";
import { RegisterUserDTO } from "./dto/register-user.dto";
import { AdminGuard } from "./admin/admin-auth.guard";
import { JwtAuthGuard } from "./jwt/jwt-auth.guard";


@Controller('/auth')
export class AuthController {

constructor(private readonly authService: AuthService){}


@Post("/login")
login(@Body("username") username: string,
        @Body("password") password:string){
        
    return this.authService.login(username, password)
}


@UseGuards(JwtAuthGuard, AdminGuard)
@Post("/register")    
register(@Body(new ValidationPipe()) registerUser: RegisterUserDTO){
        return this.authService.register(registerUser)

}

@Get("/teste")
listUser():RegisterUserDTO[]{
    return this.authService.users
}


}