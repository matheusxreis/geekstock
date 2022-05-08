import { EntityRepository, Repository } from "typeorm";
import { RegisterUserDTO } from "../auth/dto/register-user.dto";
import { User } from "./user.entity";


@EntityRepository(User)
export class UserRepository extends Repository<User>{

    constructor(){
        super()
    }

register(data:RegisterUserDTO):void{

    this.save(data)
 } 
 
 async findByUsername(username: string):Promise<User>{

     const user = await this.findOne({ username })
       
     
     return user
 }

 async findById(id: string):Promise<User>{

     const user = await this.findOne({ id })
       
     return user
 }


 
}