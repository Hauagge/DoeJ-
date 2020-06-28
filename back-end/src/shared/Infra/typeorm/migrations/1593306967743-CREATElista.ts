import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CREATElista1593306967743 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.createTable
        (
            new Table
            (
             {
                name:'Lista',
                columns:[
                    {
                        name:'ID',
                        type:'uuid',
                        default:'uuid_generate_v4()',
                        isPrimary: true,
                        generationStrategy: 'uuid'   
                    },
                    {
                        name:'descricao',
                        type:'varchar'
                    },
                    {
                        name:'dateCreate',
                        type:'timestamp',
                        default:'now()',
                    },
                    {
                        name:'categoriaLista_ID',
                        type:'varchar',
                    },
                    {
                        name:'user_ID',
                        type:'varchar',
                    }
                ]
             }   
            )
        );

        await queryRunner.createForeignKey('Lista',
        new TableForeignKey
        (
            {
                columnNames:['categoriaLista_ID'],
                referencedColumnNames: ['ID'],
                referencedTableName: 'CategoriaLista',
                onDelete: 'CASCADE'
            }
        )
        );
        
        await queryRunner.createForeignKey('Lista',
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

    }

    public async down(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.dropTable('Lista');
    }

}
