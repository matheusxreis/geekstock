import { Injectable } from "@nestjs/common";


@Injectable()
export class ProductsService {



    async listAllProducts(){
        return "Todos os produtos"
    }



}