import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserRepository } from "./user.repository";
import { Users } from "./users.entity";




@Injectable()
export class UserService {

    constructor(
    private userRepository: UserRepository
    ){}


      listDataUser(id: string){
        return this.userRepository.findOne({  })
      }
}