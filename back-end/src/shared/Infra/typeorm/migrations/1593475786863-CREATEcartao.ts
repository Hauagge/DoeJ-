import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CREATEcartao1593475786863 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.createTable
        (
            new Table({
                name: 'Cartao',
                columns:[
                {
                    name:'ID',
                    type:'uuid',
                    generationStrategy: 'uuid',
                    default:'uuid_generate_v4()',
                    isPrimary: true, 
                },
                {
                    name:'descricao',
                    type: 'varchar',
                },
                {
                    name:'numero',
                    type:'varchar',
                },
                {
                    name:'agencia',
                    type:'varchar',
                },
                {
                    name:'conta',
                    type:'varchar',
                },
                {
                    name:'bandeira_ID',
                    type:'varchar',
                },
                {
                    name:'user_ID',
                    type: 'varchar',
                }
            ]
            })    
        );
        await queryRunner.createForeignKey('Cartao',
        new TableForeignKey
        (
            {
                name: 'FKBANDEIRA_ID',
                columnNames:['bandeira_ID'],
                referencedColumnNames: ['ID'],
                referencedTableName: 'Bandeira',
                onDelete: 'CASCADE'
            }
        )
        );

        await queryRunner.createForeignKey('Cartao',
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
    }

    public async down(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.dropForeignKey('Cartao','FKBANDEIRA_ID');
        await queryRunner.dropForeignKey('Cartao','FKUSER_ID');
        await queryRunner.dropTable('Cartao');
    }
}
