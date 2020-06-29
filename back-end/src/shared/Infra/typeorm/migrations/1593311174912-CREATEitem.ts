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
                name: 'FKPRODUTO_ID',
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
                name: 'FKLISTA_ID',
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
        await queryRunner.dropForeignKey('Item','FKPRODUTO_ID');
        await queryRunner.dropForeignKey('Item','FKLISTA_ID');
        await queryRunner.dropTable('Item');

    }

}
