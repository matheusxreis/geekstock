import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "../user/users.entity";
import { UserModule } from "../user/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserRepository } from "../user/user.repository";


@Module({
    imports: [UserModule,
            TypeOrmModule.forFeature([UserRepository])],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}