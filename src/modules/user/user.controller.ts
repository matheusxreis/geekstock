import { Controller, Get, Param, ParseUUIDPipe } from "@nestjs/common";
import { UserService } from "./user.service";



@Controller("/user")
export class UserController{

constructor(private readonly userService: UserService){}
    
@Get(":id")
listDataUser(@Param("id", new ParseUUIDPipe()) id: string){
    return this.userService.listDataUser(id)
}    

}