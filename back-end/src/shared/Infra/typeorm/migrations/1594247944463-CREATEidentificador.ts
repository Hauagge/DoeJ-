import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CREATEidentificador1594247944463
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Identificador',
        columns: [
          {
            name: 'id',
            type: 'decimal',
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
