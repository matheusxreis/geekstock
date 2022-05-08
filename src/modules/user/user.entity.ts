import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity("users")
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
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