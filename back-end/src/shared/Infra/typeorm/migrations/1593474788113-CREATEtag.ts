import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CREATEtag1593474788113 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.createTable
        (
            new Table
            (
                {
                    name:'Tag',
                    columns:
                    [
                        {
                            name: 'ID',
                            type: 'uuid',
                            generationStrategy: 'uuid',
                            isPrimary: true,
                            default: 'uuid_generate_v4()',
                        },
                        {
                            name: 'descricao',
                            type: 'varchar',
                        },
                        {
                            name: 'foto',
                            type: 'varchar',                            
                        }

                    ]
                
                }
                    
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.dropTable("Tag");
    }

}
