import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "../user/users.entity";
import { UserModule } from "../user/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserRepository } from "../user/user.repository";
import { JwtModule, JwtService } from "@nestjs/jwt";
import * as dotenv from 'dotenv';
import { JwtStrategy } from "./jwt/jwt.strategy";
import { AdminGuard } from "./admin/admin-auth.guard";
dotenv.config();

@Module({
    imports: [UserModule,
            JwtModule.register({secret: process.env.JWT_SECRET,
                                signOptions: { expiresIn: '60m' }})],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, AdminGuard],
})
export class AuthModule {}