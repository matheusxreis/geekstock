import { Injectable} from "@nestjs/common";
import { UserRepository } from "../user/user.repository";
import { RegisterUserDTO } from "./dto/register-user.dto";
import * as bcryp from "bcrypt"


@Injectable()
export class AuthService{

    users = new Array<RegisterUserDTO>() 

    constructor(
        private userRepository: UserRepository

    ){}

    async login(username: string, password:string):Promise<string>{

        const user = await this.userRepository.findByUsername(username)

        if(user){
            const right = await bcryp.compare(password, user.password)  

            console.log(right)

            if(right){
            return "You're in!"
            }
       
        }
       
        return "you're not in =("
       
    }

    async register(data: RegisterUserDTO ):Promise<void> {

        const { password } = data;


        const encryptPassword = await bcryp.hash(password, 10);
    
        const newData = {
            ...data,
            password: encryptPassword
        }
        
        
         this.userRepository.register(newData)

    }

}