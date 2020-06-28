import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class tag1593293053249 implements MigrationInterface {

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
                            type: 'bytea',                            
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
