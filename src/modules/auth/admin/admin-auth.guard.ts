import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common"
import { Observable } from "rxjs"
import { UserRepository } from "src/modules/user/user.repository"


@Injectable()
export class AdminGuard implements CanActivate {

    constructor(
        private userRepository: UserRepository
    ){}

    async canActivate(context: ExecutionContext):  Promise<boolean>  {
        const request = context.switchToHttp().getRequest()

        
        const userId = request.user.user_id


        const user = await this.userRepository.findById(userId)

        console.log(user)

        if(user.perfil === 1){
            return true
        }

        return false

    }
}