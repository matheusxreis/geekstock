import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "../user/user.module";
import { ProductController } from "./product.controller";
import { ProductRepository } from "./product.repository";
import { ProductService } from "./product.service";




@Module({
    imports: [UserModule,
    TypeOrmModule.forFeature([ProductRepository])],
    controllers: [ProductController],
    providers: [ProductService]
})
export class ProductModule{}