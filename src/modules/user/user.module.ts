import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "./users.entity";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";



@Module({
    imports: [TypeOrmModule.forFeature([UserRepository])],
    providers: [UserService],
    controllers: [UserController]
})

export class UserModule {}