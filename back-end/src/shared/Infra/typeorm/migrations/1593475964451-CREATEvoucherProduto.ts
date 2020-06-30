import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CREATEvoucherProduto1593475964451 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.createTable(
            new Table(
                {
                    name:'VoucherProduto',
                    columns:[
                        {
                            name: 'ID',
                            type: 'uuid',
                            default: 'uuid_generate_v4()',
                            isPrimary: true,
                            generationStrategy: 'uuid'
                        },
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
                name: 'FKVOUCHER_ID',
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
        await queryRunner.dropForeignKey('VoucherProduto','FKVOUCHER_ID');
        await queryRunner.dropForeignKey('VoucherProduto','FKPRODUTO_ID');
        await queryRunner.dropTable('VoucherProduto');
    }

}
