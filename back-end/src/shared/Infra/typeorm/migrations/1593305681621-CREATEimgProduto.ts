import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CREATEimgProduto1593305681621 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.createTable(
            new Table(
                {
                    name:'ImgProduto',
                    columns:[
                        {
                            name:'img',
                            type:'bytea', 
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
        await queryRunner.dropTable('ImgProduto');
    }

}
