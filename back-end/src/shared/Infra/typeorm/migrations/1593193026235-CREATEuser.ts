import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CREATEuser1593193026235 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.createTable
        (
            new Table
            (
                {
                    name:'User',
                    columns:
                    [
                        {
                            name:'ID',
                            type:'uuid',
                            isPrimary: true,
                            generationStrategy: 'uuid',
                            default: 'uuid_generate_v4()',
                        },
                        {
                            name: 'docID',
                            type: 'varchar'
                        },
                        {
                            name:'nome',
                            type:'varchar',
                        },
                        {
                            name:'email',
                            type:'varchar'
                        },
                        {
                            name:'telefoneOpc',
                            type:'varchar'
                        },
                        {
                            name:'telefoneMov',
                            type:'varchar',
                        },
                        {
                            name:'endereco',
                            type:'varchar',
                        },
                        {
                            name: 'update',
                            type:'date',   
                        },
                        {
                            name: 'foto',
                            type: 'bytea',
                        },
                        {
                            name: 'login',
                            type: 'varchar',
                        },
                        {
                            name: 'senha',
                            type: 'varchar',
                        },
                        {
                            name: 'createDate',
                            type: 'date',
                        },
                        {
                            name: 'saldo',
                            type: 'double',
                            default: '0,00',
                        },
                        {
                            name: 'nascimento',
                            type: 'date',
                        },
                        {
                            name: 'fotodoc_frente',
                            type:'bytea',
                        },
                        {
                            name: 'fotodoc_verso',
                            type:'bytea',
                        },
                        {
                            name: 'identifier_ID',
                            type: 'varchar',
                        }                
                    ]
                }
        )
        );

        await queryRunner.createForeignKey('User',
                new TableForeignKey
                (
                    {
                        columnNames:['Identifier_ID'],
                        referencedColumnNames: ["ID"],
                        referencedTableName: "Identificador",
                        onDelete: "CASCADE"
                    }
                )
        );

    }


    public async down(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.dropTable('User');
    }

}
