import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CREATEvoucherItem1593475964451 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.createTable(
            new Table(
                {
                    name:'VoucherItem',
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
                            type:'uuid',
                        },
                        {
                            name:'item_ID',
                            type:'uuid'
                        }
                    ]
                }
            )
        );

        await queryRunner.createForeignKey('VoucherItem',
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

        await queryRunner.createForeignKey('VoucherItem',
        new TableForeignKey
        (
            {
                name: 'FKITEM_ID',
                columnNames:['item_ID'],
                referencedColumnNames: ['ID'],
                referencedTableName: 'Item',
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
