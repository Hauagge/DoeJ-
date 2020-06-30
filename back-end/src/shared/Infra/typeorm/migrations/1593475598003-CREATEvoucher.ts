import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CREATEvoucher1593475598003 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.createTable
        (
            new Table({
                name: 'Voucher',
                columns:[
                    {
                        name:'ID',
                        type: 'uuid',
                        generationStrategy:'uuid',
                        isPrimary: true,
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'codigo',
                        type: 'varchar'
                    },
                    {
                        name: 'dataCreate',
                        type:'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'dataExpired',
                        type: 'timestamp'
                    },
                    {
                        name:'descricao',
                        type:'varchar',
                    },
                    {
                        name:'userGen_ID',
                        type:'varchar',
                    }

                ]
            })
        );
        await queryRunner.createForeignKey('Voucher',
        new TableForeignKey
        (
            {
                name: 'FK_ID',
                columnNames:['userGen_ID'],
                referencedColumnNames: ['ID'],
                referencedTableName: 'User',
                onDelete: 'CASCADE'
            }
        )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.dropForeignKey('Voucher','FK_ID');
        await queryRunner.dropTable('Voucher');
    }

}
