import { BadRequestException, Injectable} from "@nestjs/common";
import { UserRepository } from "../user/user.repository";
import { RegisterUserDTO } from "./dto/register-user.dto";
import * as bcryp from "bcrypt"
import { JwtService } from "@nestjs/jwt";
import { Users } from "../user/users.entity";


@Injectable()
export class AuthService{

    users = new Array<RegisterUserDTO>() 

    constructor(
        private userRepository: UserRepository,
        private jwtService: JwtService

    ){}

    async login(username: string, password:string):Promise<LoginUserDTO>{

       const userValidated = await this.validateUser(username, password)

       

       if(userValidated){
           
        const payload = {username: userValidated.username, sub: userValidated.id}
            return {
                user: {
                    name: userValidated.name,
                    username: userValidated.username,
                    id: userValidated.id,
                    perfil: userValidated.perfil
                    
                },
                access_token: this.jwtService.sign(payload)
            }

        }


        throw new BadRequestException({error: "Username or password is wrong."}) 
          
    }


    async validateUser(username: string, password: string):Promise<Users|null>{
        const user = await this.userRepository.findByUsername(username)

        if(user){
            const isPasswordRight=await bcryp.compare(password, user.password)  

            if(isPasswordRight) { return user }
        }

        return null
       
    }


    async register(data: RegisterUserDTO ):Promise<void> {

        const { password, username} = data;

        const usernameAlreadyExist = await this.userRepository.findByUsername(username);

        if(usernameAlreadyExist){
            console.log(usernameAlreadyExist)
            throw new BadRequestException({error:"Username already exist!"})
        }

        const encryptPassword = await bcryp.hash(password, 10);

    
        const newData = {
            ...data,
            password: encryptPassword
        }
        
        
         this.userRepository.register(newData)

    }

}