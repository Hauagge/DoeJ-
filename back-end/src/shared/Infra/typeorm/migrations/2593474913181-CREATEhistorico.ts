import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CREATEhistorico2593474913181 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.createTable
        (
            new Table
            (
                {
                    name:'Historico',
                    columns:
                    [
                        {
                            name:'ID',
                            type:'uuid',
                            isPrimary: true,
                            generationStrategy: 'uuid',
                            default:'uuid_generate_v4()',
                        },
                        {
                            name:'descricao',
                            type:'varchar',
                        },
                        {
                            name:'data',
                            type:'date'
                        },
                        {
                            name: 'voucher_ID',
                            type: 'uuid',                            
                        },
                        {
                            name: 'user_ID',
                            type: 'uuid',
                        }                 
                    ]
                }
            )
        );

        await queryRunner.createForeignKey('Historico',
        new TableForeignKey
        (
            {
                name: 'FKUSER_ID',
                columnNames:['user_ID'],
                referencedColumnNames: ['ID'],
                referencedTableName: 'User',
                onDelete: 'CASCADE'
            }
        )
        );
        await queryRunner.createForeignKey('Historico',
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.dropForeignKey('Historico','FKUSER_ID');
        await queryRunner.dropForeignKey('Historico','FKVOUCHER_ID');
        await queryRunner.dropTable('Historico');
    }

}
