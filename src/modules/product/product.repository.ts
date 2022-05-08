import { EntityRepository, Repository } from "typeorm";
import { CreateProductDTO } from "./dto/create-product.dto";
import { Product } from "./product.entity";





@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
    

    constructor(){
        super()



    }


    async listAll(): Promise<Product[]>{
        const a =  await this.find()

        console.log(a)
        return a 
    }


    async createNewProduct(product: CreateProductDTO) {
        await this.save(product)
    }

    async findByName(name:string): Promise<Product|undefined>{
       return await this.findOne({ name })
    }



}