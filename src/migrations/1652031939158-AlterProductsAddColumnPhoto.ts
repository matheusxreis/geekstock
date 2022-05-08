import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterProductsAddColumnPhoto1652031939158 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

       await queryRunner.addColumn("products", 
        new TableColumn({
            name: "photo",
            type: "varchar(1000)",
            isNullable: true
        })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn("products", "photo")
    }

}
