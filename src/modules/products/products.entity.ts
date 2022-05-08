import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../category/category.entity";
import { User } from "../user/user.entity";



@Entity("products")
export class Product{


    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        nullable:false,
        unique:true
    })
    name: string;

    
    @Column({
        nullable: false,
    })
    @ManyToOne(()=> User, user => user.id)
    added_by:string;


    @Column({
        nullable: false
    })
    added_at: Date;

    
    @Column({
        nullable:true
    })
    @ManyToOne(()=> User, user => user.id)
    updated_by:string;

    @Column({
        nullable:true
    })
    updated_at: Date;

  
    @ManyToOne(()=> Category, category => category.id)
    category: string;

    @Column({
        nullable:false
    })
    price: number;

    @Column({
        nullable:false
    })
    amount:number;

}