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
                        name: 'user_ID',
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
                name: 'FKUSER_ID',
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
        await queryRunner.dropForeignKey('Donator','FKUSER_ID');
        await queryRunner.dropForeignKey('Donator','FKLISTA_ID');
        await queryRunner.dropTable('Donator');
    }

}
