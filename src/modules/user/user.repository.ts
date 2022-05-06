import { EntityRepository, Repository } from "typeorm";
import { RegisterUserDTO } from "../auth/dto/register-user.dto";
import { Users } from "./users.entity";


@EntityRepository(Users)
export class UserRepository extends Repository<Users>{

    constructor(){
        super()
    }

register(data:RegisterUserDTO):void{

    this.save(data)
 } 
 
 async findByUsername(username: string):Promise<Users>{

     const user = await this.findOne({ username })
       
     console.log(user)
     return user
 }

 async findById(id: string):Promise<Users>{

    console.log(id)


     const user = await this.findOne({ id })
       
     return user
 }


 
}