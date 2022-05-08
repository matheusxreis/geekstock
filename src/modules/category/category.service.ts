import { BadRequestException, HttpException, Injectable } from "@nestjs/common";
import { Category } from "./category.entity";
import { CategoryRepository } from "./category.repository";
import { CreateCategoryDTO } from "./dto/create-category.dto";



@Injectable()
export class CategoryService{ 

    constructor(
        private categoryRepository: CategoryRepository
    ){}
    

    async createNewCategory(category: CreateCategoryDTO){
        
        const alreadyExist = await this.categoryRepository.findByName(category.name)

        if(alreadyExist){
            throw new BadRequestException({error: "Category already exist"})
        }
        
        await this.categoryRepository.createNewCategory(category)
    }

    async listAll(): Promise<Category[]>{
       return await this.categoryRepository.listAll()
    }
}