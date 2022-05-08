import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminGuard } from "../auth/admin/admin-auth.guard";
import { JwtAuthGuard } from "../auth/jwt/jwt-auth.guard";
import { UserModule } from "../user/user.module";
import { UserRepository } from "../user/user.repository";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";




@Module({
    imports: [UserModule],
    controllers: [ProductsController],
    providers: [ProductsService]
})
export class ProductsModule{}