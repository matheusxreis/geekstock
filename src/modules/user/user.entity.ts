import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Product } from '../product/product.entity'

@Entity("users")
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({
    nullable:false
    })
    name: string

    @Column({
        unique:true
    })
    username:string

    @Column()
    password:string

    @Column()
    perfil: number
    
}