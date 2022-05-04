import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, Unique, Generated, BeforeInsert} from 'typeorm'
import { v4 as uuidv4} from 'uuid'

@Entity()
export class Users {



    @Column({
        primary:true,
        generated:"uuid"
    })
    id: string
    @BeforeInsert() generate(){ this.id=uuidv4() }


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