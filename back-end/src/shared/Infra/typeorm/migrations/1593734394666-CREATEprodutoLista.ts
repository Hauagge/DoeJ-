import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CREATEprodutoLista1593734394666 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.createTable(
            
                new Table
                (
                    {
                        name: 'ProdutoLista',
                        columns: 
                        [
                            {
                                name: 'ID',
                                type: 'uuid',
                                default: 'uuid_generate_v4()',
                                isPrimary: true,
                                generationStrategy: 'uuid'
                            },
                            {
                                name:'lista_ID',
                                type:'uuid',
                            },
                            {
                                name:'produto_ID',
                                type:'uuid'
                            }

                        ]
                    }
                )
            
        );

        await queryRunner.createForeignKey('ProdutoLista',
        new TableForeignKey
        (
            {
                name: 'FKLISTA_ID',
                columnNames:['lista_ID'],
                referencedColumnNames: ['ID'],
                referencedTableName: 'Voucher',
                onDelete: 'CASCADE'
            }
        )
        );

        await queryRunner.createForeignKey('ProdutoLista',
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

    }

    public async down(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.dropForeignKey('ProdutoLista','FKLISTA_ID');
        await queryRunner.dropForeignKey('ProdutoLista','FKPRODUTO_ID');
        await queryRunner.dropTable('ProdutoLista');
    }

}
