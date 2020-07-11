import {MigrationInterface, QueryRunner, Table, Column, TableForeignKey} from "typeorm";

export default class CREATEuserDependente1593475005446 implements MigrationInterface {

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
                            name: 'ID',
                            type: 'uuid',
                            default: 'uuid_generate_v4()',
                            isPrimary: true,
                            generationStrategy: 'uuid'
                        },
                        {
                            name:'user_ID',
                            type:'uuid',
                            isNullable: false,
                        },
                        {
                            name:'dependente_ID',
                            type:'uuid',
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
                        name: 'FKUSER_ID',
                        columnNames:['user_ID'],
                        referencedColumnNames: ['ID'],
                        referencedTableName: 'User',
                        onDelete: 'CASCADE'
                    }
                )
        );
        
        await queryRunner.createForeignKey('UserDependente',
        new TableForeignKey
        (
            {
                name: 'FKDEPENDENTE_ID',
                columnNames:['dependente_ID'],
                referencedColumnNames: ['ID'],
                referencedTableName: 'User',
                onDelete: 'CASCADE'
            }
        )
);


    }

    public async down(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.dropForeignKey('UserDependente','FKUSER_ID');
        await queryRunner.dropForeignKey('UserDependente','FKDEPENDENTE_ID');
        await queryRunner.dropTable('UserDependente');
    }

}

