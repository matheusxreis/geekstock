import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../product/product.entity";



@Entity("categories")
export class Category {


@PrimaryGeneratedColumn("uuid")
id: string;

@Column({
    unique:true,
    nullable:false
})
name: string;

@Column()
description: string;

//@OneToMany(type=>Product, product=>product.category)
//products: Product[]
}