import { query } from "express";
import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProducts1651984737804 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
           new Table({
               name:"products",
               columns: [
                   {
                    name:"id",
                    type:"uuid",
                    default:"gen_random_uuid()",
                    isPrimary:true,
                    isNullable:false,
                    isUnique:true,

                   },
                   {
                    name:"name",
                    type:"varchar(100)",
                    isNullable:false,
                    isUnique:true,
                   },
                   {    
                    name: "price",
                    type: "money",
                    isNullable: false
                   },
                   {
                    name: "amount",
                    type: "integer",
                    isNullable: false,
                   },
                   {
                    name: "added_by",
                    type: "uuid",
                    isNullable: false
                   },
                   {
                    name: "updated_by",
                    type:"uuid",
                    isNullable:false,
                   },
                   {
                    name:"added_at",
                    type:"timestamp",
                    default:"now()",
                    isNullable: false
                   },
                   {
                    name:"updated_at",
                    type: "timestamp",
                    isNullable:true,
                   },
                   {
                    name:"category",
                    type: "uuid",
                    isNullable:false,
                    
                   }

               ]
           }))
        
       await queryRunner.createForeignKey(
            "products",
         new TableForeignKey({
             name:"FK_CATEGORY",
             columnNames: ["category"],
             referencedColumnNames: ["id"],
             referencedTableName: "categories",
            onDelete: "SET NULL"
         }))

        await queryRunner.createForeignKey(
            "products",
            new TableForeignKey({
            name:"FK_ADDED_BY",
            columnNames: ["added_by"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "SET NULL"
            })
        )

        await queryRunner.createForeignKey(
        "products",
        new TableForeignKey({
            name:"FK_UPDATED_BY",
            columnNames: ["updated_by"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "SET NULL"
        })
    )
            
      
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropForeignKey("products", "FK_ADDED_BY")
        await queryRunner.dropForeignKey("products", "FK_UPDATED_BY")
        await queryRunner.dropForeignKey("products", "FK_CATEGORY")
    
        await queryRunner.dropTable("products")
    }

}
