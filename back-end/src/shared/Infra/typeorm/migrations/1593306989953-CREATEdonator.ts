import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CREATEdonator1593306989953 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.createTable(
            new Table({
                name:'Donator',
                columns:
                [
                    {
                        name: 'lista_ID',
                        type: 'varchar',
                    },
                    {
                        name: 'lista_ID',
                        type: 'varchar',
                    },
                    {
                        name:'data',
                        type:'timestamp',
                    }
                ]

            })
        );

        await queryRunner.createForeignKey('Donator',
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
        
        await queryRunner.createForeignKey('Donator',
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
        await queryRunner.dropTable('Donator');
    }

}
