import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategories1651977351825 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "categories",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        default: "gen_random_uuid()"
                    },
                    {
                        name:"name",
                        type:"varchar(30)",
                        isUnique:true,
                        isNullable:false
                    },
                    {
                        name: "description",
                        type: "varchar(100)"
                    }
            

                ]
            }),
            false
        )
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
   
        await queryRunner.dropTable("categories")
    }

}
