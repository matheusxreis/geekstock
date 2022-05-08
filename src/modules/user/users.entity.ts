import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Users {

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