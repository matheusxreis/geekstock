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


}