import { Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";




@Module({
    imports: [UserModule],
    controllers: [ProductsController],
    providers: [ProductsService]
})
export class ProductsModule{}