import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CREATEcategoriaLista1593307198848 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.createTable(
            new Table(
                {
                    name:'CategoriaLista',
                    columns:[
                        {
                            name:'ID',
                            type:'uuid',
                            default:'uuid_generate_v4()',
                            isPrimary: true,
                            generationStrategy: 'uuid',
                        },
                        {
                            name:'descricao',
                            type:'varchar',
                        },
                        {
                            name:'icon',
                            type:'bytea'
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('CategoriaLista');
    }
    
    }
