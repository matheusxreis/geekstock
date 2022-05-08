import { Body, Controller, Get, Post, UseGuards, ValidationPipe } from "@nestjs/common";
import { AdminGuard } from "../auth/admin/admin-auth.guard";
import { JwtAuthGuard } from "../auth/jwt/jwt-auth.guard";
import { Category } from "./category.entity";
import { CategoryService } from "./category.service";
import { CreateCategoryDTO } from "./dto/create-category.dto";


@UseGuards(JwtAuthGuard, AdminGuard)
@Controller("/categories")
export class CategoryController {

    constructor(
        private categoryService: CategoryService
    ){}

@Post("/create")
async createNewCategory (@Body(new ValidationPipe()) category: CreateCategoryDTO){

    return await this.categoryService.createNewCategory(category)
}

@Get()
async listAll(): Promise<Category[]>{
   return await this.categoryService.listAll()
}



}