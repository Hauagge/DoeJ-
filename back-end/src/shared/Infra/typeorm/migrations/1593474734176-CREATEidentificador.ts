import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CREATEidentificador1593290573475
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Identificador',
        columns: [
          {
            name: 'ID',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'nome',
            type: 'varchar',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Identificador');
  }
}
