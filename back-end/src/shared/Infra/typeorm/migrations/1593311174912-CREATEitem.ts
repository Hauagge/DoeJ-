import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CREATEitem1593311174912 implements MigrationInterface 
{

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.createTable(
            new Table(
                {
                    name:'Item',
                    columns:
                    [
                        {
                            name: 'produto_ID',
                            type:'varchar',
                        },
                        {
                            name:'lista_TD',
                            type:'varchar'
                        },
                        {
                            name: 'quantidade',
                            type: 'integer'
                        },
                        {
                            name:'desconto',
                            type: 'double'
                        }

                    ]
                }
            )
        );

        await queryRunner.createForeignKey('Item',
        new TableForeignKey
        (
            {
                columnNames:['produto_ID'],
                referencedColumnNames: ['ID'],
                referencedTableName: 'Produto',
                onDelete: 'CASCADE'
            }
        )
        );

        await queryRunner.createForeignKey('Item',
        new TableForeignKey
        (
            {
                columnNames:['lista_ID'],
                referencedColumnNames: ['ID'],
                referencedTableName: 'Lista',
                onDelete: 'CASCADE'
            }
        )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> 
    {
    }

}
