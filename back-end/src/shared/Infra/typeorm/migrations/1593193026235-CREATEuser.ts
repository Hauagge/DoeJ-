import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CREATEuser1593193026235 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'User',
        columns: [
          {
            name: 'ID',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'docID',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'telefoneOpc',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'telefoneMov',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'endereco',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'updateDate',
            type: 'timestamp',
          },
          {
            name: 'foto',
            type: 'varchar',
            isNullable: true,
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
            type: 'timestamp',
          },
          {
            name: 'saldo',
            type: 'double',
            default: '0',
          },
          {
            name: 'nascimento',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'fotoDoc_frente',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'fotoDoc_verso',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'identifier_ID',
            type: 'varchar',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'User',
      new TableForeignKey({
        name: 'FK_ID',
        columnNames: ['Identifier_ID'],
        referencedColumnNames: ['ID'],
        referencedTableName: 'Identificador',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('User', 'FK_ID');
    await queryRunner.dropTable('User');
  }
}
