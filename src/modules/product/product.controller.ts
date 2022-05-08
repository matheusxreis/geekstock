import { Body, Controller, Get, Post, UseGuards, ValidationPipe } from "@nestjs/common";
import { AdminGuard } from "../auth/admin/admin-auth.guard";
import { JwtAuthGuard } from "../auth/jwt/jwt-auth.guard";
import { CreateProductDTO } from "./dto/create-product.dto";
import { ProductService } from "./product.service";



//@UseGuards(JwtAuthGuard, AdminGuard)
@Controller('/products')
export class ProductController {

constructor(
    private readonly productsService: ProductService
){}



@Post('/create')
async createNewProduct(@Body(new ValidationPipe()) product: CreateProductDTO){
    await this.productsService.createNewProduct(product)
}


@Get()
async listAll(){  
    return await this.productsService.listAll()
}


}