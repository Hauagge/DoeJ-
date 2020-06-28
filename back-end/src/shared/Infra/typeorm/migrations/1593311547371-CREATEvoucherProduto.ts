import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CREATEvoucherProduto1593311547371 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.createTable(
            new Table(
                {
                    name:'VoucherProduto',
                    columns:[
                        {
                            name:'voucher_ID',
                            type:'varchar',
                        },
                        {
                            name:'produto_ID',
                            type:'varchar'
                        }
                    ]
                }
            )
        );

        await queryRunner.createForeignKey('VoucherProduto',
        new TableForeignKey
        (
            {
                columnNames:['voucher_ID'],
                referencedColumnNames: ['ID'],
                referencedTableName: 'Voucher',
                onDelete: 'CASCADE'
            }
        )
        );

        await queryRunner.createForeignKey('VoucherProduto',
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.dropTable('VoucherProduto');
    }

}
