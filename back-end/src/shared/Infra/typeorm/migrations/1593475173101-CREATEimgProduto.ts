import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CREATEimgProduto1593475173101 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.createTable(
            new Table(
                {
                    name:'ImgProduto',
                    columns:[
                        {
                            name:'ID',
                            type:'uuid',
                            default:'uuid_generate_v4()',
                            isPrimary: true,
                            generationStrategy: 'uuid',
                        },
                        {
                            name:'img',
                            type:'varchar', 
                        },
                        {
                            name:'descricao',
                            type:'varchar',
                        },
                        {
                           name:'produto_ID',
                           type:'varchar',
                        }
                    ]
                }
            )
        );

        await queryRunner.createForeignKey('ImgProduto',
        new TableForeignKey
        (
            {
                name:'FK_ID',
                columnNames:['produto_ID'],
                referencedColumnNames: ['ID'],
                referencedTableName: 'Produto',
                onDelete: 'CASCADE'
            }
        )
        );           

    }

    public async down(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.dropForeignKey('ImgProduto','FK_ID');
        await queryRunner.dropTable('ImgProduto');
    }

}
