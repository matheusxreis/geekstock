import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "../user/user.module";
import { CategoryController } from "./category.controller";
import { CategoryRepository } from "./category.repository";
import { CategoryService } from "./category.service";



@Module({
    imports: [TypeOrmModule.forFeature([CategoryRepository]), 
    UserModule],
    providers: [CategoryService],
    controllers: [CategoryController]
})
export class CategoryModule {}