import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CREATEuserTag1593475041199 implements MigrationInterface {

   
    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.createTable
        (
            new Table
            (  
                {
                    name:'UserTag',
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
                            type:'varchar',
                            isNullable: false,
                        },
                        {
                            name:'tag_ID',
                            type:'varchar',
                            isNullable: false,
                        }
                    ]

                }
                    
            )

        );

        await queryRunner.createForeignKey('UserTag',
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

        await queryRunner.createForeignKey('UserTag',
        new TableForeignKey
        (
            {
                name: 'FKTAG_ID',
                columnNames:['tag_ID'],
                referencedColumnNames: ['ID'],
                referencedTableName: 'Tag',
                onDelete: 'CASCADE'
            }
        )
);
    }

    public async down(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.dropForeignKey('UserTag','FKUSER_ID');
        await queryRunner.dropForeignKey('UserTag','FKTAG_ID');
        await queryRunner.dropTable('UserTag');
    }

}
