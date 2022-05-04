import { Injectable, ValidationPipe} from "@nestjs/common";
import { RegisterUserDTO } from "./dto/register-user.dto";


@Injectable()
export class AuthService{

    users = new Array<RegisterUserDTO>() 

    login():string{
        return "You're in!"
    }

    register(data: RegisterUserDTO ):void {


        this.users.push(data)

    }

}