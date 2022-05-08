import { Controller, Get, UseGuards } from "@nestjs/common";
import { AdminGuard } from "../auth/admin/admin-auth.guard";
import { JwtAuthGuard } from "../auth/jwt/jwt-auth.guard";
import { ProductsService } from "./products.service";



@UseGuards(JwtAuthGuard, AdminGuard)
@Controller('/products')
export class ProductsController {

constructor(
    private readonly productsService: ProductsService
){}

@Get()
listAllProducts(){  
    return this.productsService.listAllProducts()
}


}