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
                    type: "varchar(60)",
                    isNullable: false
                   },
                   {
                    name: "updated_by",
                    type:"varchar(60)"
                   },
                   {
                    name:"added_at",
                    type:"timestamp",
                    default:"now()",
                    isNullable: false
                   },
                   {
                    name:"updated_at",
                    type: "timestamp"
                   },
                   {
                    name:"category",
                    type: "uuid",
                    isNullable:false,
                    
                   }

               ]
           })       

        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    
        await queryRunner.dropTable("products")
    }

}
