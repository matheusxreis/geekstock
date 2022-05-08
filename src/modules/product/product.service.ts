import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateProductDTO } from "./dto/create-product.dto";
import { Product } from "./product.entity";
import { ProductRepository } from "./product.repository";


@Injectable()
export class ProductService {

constructor(
    private productRepository: ProductRepository
){}

    async listAll(): Promise<Product[]>{

        console.log("SERVICE")
        return await this.productRepository.listAll()
    }

    async createNewProduct(product: CreateProductDTO) {
        const {name} = product
        const alreadyExist = await this.productRepository.findByName(name)

        if(alreadyExist){
            throw new BadRequestException({error: "Product already registed"})
        }

        await this.productRepository.createNewProduct(product)
        
    }


}