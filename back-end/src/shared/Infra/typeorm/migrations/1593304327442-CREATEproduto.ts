import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CREATEproduto1593304327442 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.createTable
        (
            new Table
            (
                {
                    name:'Produto',
                    columns:
                    [
                        {
                            name:'ID',
                            type:'uuid',
                            default:'uuid_generate_v4()',
                            isPrimary: true,
                            generationStrategy:'uuid'
                        },
                        {
                            name:'descricao',
                            type:'varchar',
                        },
                        {
                            name:'preco',
                            type:'double',
                        },
                        {
                            name:'quantidade',
                            type:'integer',
                        },
                        {
                            name:'user_ID',
                            type:'varchar',
                        },
                        {
                            name:'marca_ID',
                            type:'varchar',
                        }
                    ]
                }
            )
        );

        await queryRunner.createForeignKey('Produto',
        new TableForeignKey
        (
            {
                columnNames:['user_ID'],
                referencedColumnNames: ['ID'],
                referencedTableName: 'User',
                onDelete: 'CASCADE'
            }
        )
        );
        
        await queryRunner.createForeignKey('Produto',
        new TableForeignKey
        (
            {
                columnNames:['marca_ID'],
                referencedColumnNames: ['ID'],
                referencedTableName: 'Marca',
                onDelete: 'CASCADE'
            }
        )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.dropTable('Produto');
    }

}
