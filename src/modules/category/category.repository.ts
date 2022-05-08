import { EntityRepository, Repository } from "typeorm";
import { Category } from "./category.entity";
import { CreateCategoryDTO } from "./dto/create-category.dto";


@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {

    constructor(){
        super()
    }

    async createNewCategory(category: CreateCategoryDTO){
        await this.save(category)
    }

    async listAll(): Promise<Category[]>{
        return await this.find()
    }

    async findByName(name: string): Promise<Category|undefined>{

        return await this.findOne({ name })
    }
}