import { triggerAsyncId } from "async_hooks";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1651975635867 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
               name: "users",
               columns: [
                   { 
                       name: "id",
                       type: "uuid",
                       isPrimary: true,
                       default: "gen_random_uuid()"
                   },
                   {
                       name: "name",
                       type: "varchar(30)",
                       isNullable:false
                   },
                   {
                       name: "username",
                       type: "varchar(30)",
                       isUnique: true,
                       isNullable:false

                   },
                   {
                       name:"password",
                       type:"varchar(100)",
                       isNullable:false
                   },
                   {
                        name: "perfil",
                        type: "numeric",
                        isNullable:false

                   }
               ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    
            await queryRunner.dropTable("users")
    }

}
