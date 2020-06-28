import {MigrationInterface, QueryRunner, Table, Column, TableForeignKey} from "typeorm";

export default class userDependente1593292335963 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.createTable
        (
            new Table
            (  
                {
                    name:'UserDependente',
                    columns:
                    [
                        {
                            name:'user_ID',
                            type:'varchar',
                            isNullable: false,
                        },
                        {
                            name:'dependente_ID',
                            type:'varchar',
                            isNullable: false,
                        }
                    ]

                }
                    
            )

        );

        await queryRunner.createForeignKey('UserDependente',
                new TableForeignKey
                (
                    {
                        columnNames:['user_ID','dependente_ID'],
                        referencedColumnNames: ['ID'],
                        referencedTableName: 'User',
                        onDelete: 'CASCADE'
                    }
                )
        );



    }

    public async down(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.dropTable('UserDependente');
    }

}
