import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSettings1618981105866 implements MigrationInterface {

    // No up a migration é executada e a tabela é criada
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( 
            new Table({
                name: "settings",
                columns: [
                    {
                        name: "id",
                        // Unic Universal Id
                        type: "uuid",
                        // É importante sempre definir uma chave primária para uma tabela
                        isPrimary: true,
                    },
                    {
                        name: "username",
                        type: "varchar",
                    },
                    {
                        name: "chat",
                        type: "boolean",
                        default: true,
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    // No down, a tabela é revertida
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("settings");
    }
}
