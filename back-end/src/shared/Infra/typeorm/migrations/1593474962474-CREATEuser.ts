import { MigrationInterface, QueryRunner, Table } from 'typeorm';

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
            default: 'now()',
            isNullable: true,
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
            default: 'now()',
          },
          {
            name: 'saldo',
            type: 'NUMERIC(9, 2)',
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
            type: 'integer',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('User');
  }
}
