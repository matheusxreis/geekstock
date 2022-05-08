import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserRepository } from "./user.repository";

interface IRequest extends Request {
  user: {
    user_id: string
  }
}


@Injectable()
export class UserService {

    constructor(
    private userRepository: UserRepository
    ){}


      async listUserById(id: string){
        const {name, username, perfil } = await this.userRepository.findById(id)

        return {
          name,
          username,
          perfil
        }
      }


      async listDataUser(request: IRequest){

        const id = request.user.user_id
        const {name, username, perfil } = await this.userRepository.findById(id)

        return {
          name,
          username,
          perfil
        }
      } 
}