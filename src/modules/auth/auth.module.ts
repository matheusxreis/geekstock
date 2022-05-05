import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "../user/users.entity";
import { UserModule } from "../user/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserRepository } from "../user/user.repository";
import { JwtModule, JwtService } from "@nestjs/jwt";
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
    imports: [UserModule,
            JwtModule.register({secret: process.env.JWT_SECRET,
                                signOptions: { expiresIn: '60s' }}),
            TypeOrmModule.forFeature([UserRepository])],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}