import { Inject, Injectable, ValidationPipe} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { UserRepository } from "../user/user.repository";
import { Users } from "../user/users.entity";
import { RegisterUserDTO } from "./dto/register-user.dto";


@Injectable()
export class AuthService{

    users = new Array<RegisterUserDTO>() 

    constructor(
        private userRepository: UserRepository

    ){}

    login():string{
        return "You're in!"
    }

    async register(data: RegisterUserDTO ):Promise<void> {
        
         this.userRepository.register(data)

    }

}