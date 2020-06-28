import {MigrationInterface, QueryRunner, Table, Column} from "typeorm";

export default class CREATEidentificador1593290573475 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.createTable
        (
            new Table
            (
                {
                    name:'Identificador',
                    columns:
                    [
                        {
                            name:'ID',
                            type:'uuid',
                            isPrimary: true,
                            generationStrategy:'uuid',
                            default:'uuid_generate_v4()',
                        },
                        {
                            name:'nome',
                            type:'varchar',
                        }
                    ]
                }
            )                      
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.dropTable('Identificador');
    }

}
