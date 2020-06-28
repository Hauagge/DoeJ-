import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class historico1593294298687 implements MigrationInterface {

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
                            type:'varchar'
                        },
                        {
                            name:'data',
                            type:'date'
                        },
                        {
                            name: 'voucher_ID',
                            type: 'varchar',                            
                        },
                        {
                            name: 'user_ID',
                            type: 'varchar',
                        }                 
                    ]
                }
            )
        );

        await queryRunner.createForeignKey('Historico',
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
        await queryRunner.createForeignKey('Historico',
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.dropTable('Historico');
    }

}
