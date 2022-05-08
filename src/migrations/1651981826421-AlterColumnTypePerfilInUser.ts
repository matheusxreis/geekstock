import { table } from "console";
import {Column, MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterColumnTypePerfilInUser1651981826421 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
   
        await queryRunner.changeColumn(
             "users",
             "perfil",
             new TableColumn({
                name:"perfil",
                type: "integer"
            })
            
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable(
            "perfil"
        )
    
    }

}
