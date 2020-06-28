import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CREATEmarca1593303920749 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.createTable(
            new Table({
                name: 'Marca',
                columns:
                [
                    {
                        name:'ID',
                        type:'uuid',
                        default:'uuid_generate_v4()',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                    },
                    {
                        name:'nome',
                        type:'varchar',
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.dropTable('Marca');
    }
}
