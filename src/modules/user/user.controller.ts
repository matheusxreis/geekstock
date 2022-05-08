import { Controller, Get, Param, ParseUUIDPipe, Req, Res, UseGuards } from "@nestjs/common";
import { AdminGuard } from "../auth/admin/admin-auth.guard";
import { JwtAuthGuard } from "../auth/jwt/jwt-auth.guard";
import { UserService } from "./user.service";


@UseGuards(JwtAuthGuard)
@Controller("/user")
export class UserController{

constructor(private readonly userService: UserService){}
  
@UseGuards(AdminGuard)
@Get("/perfil/:id")
listUserById(@Param("id", new ParseUUIDPipe()) id: string){
    return this.userService.listUserById(id)
} 


@Get("/perfil")
listDataUser(@Req() request:any){
    console.log(request)
    return this.userService.listDataUser(request)
}

}