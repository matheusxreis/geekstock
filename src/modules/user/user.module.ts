import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "./users.entity";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";


@Global()
@Module({
    imports: [TypeOrmModule.forFeature([UserRepository])],
    providers: [UserService],
    controllers: [UserController],
    exports: [TypeOrmModule.forFeature([UserRepository])]
})

export class UserModule {}