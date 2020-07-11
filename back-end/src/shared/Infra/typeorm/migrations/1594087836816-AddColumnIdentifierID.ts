import {
  MigrationInterface,
  QueryRunner,
  TableForeignKey,
  TableColumn,
} from 'typeorm';

export default class AddColumnIdentifierID1594087836816
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'User',
      new TableColumn({
        name: 'identifier_ID',
        type: 'integer',
      }),
    );

    await queryRunner.createForeignKey(
      'User',
      new TableForeignKey({
        name: 'FK_ID',
        columnNames: ['identifier_ID'],
        referencedColumnNames: ['id'],
        referencedTableName: 'Identificador',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('User', 'FK_ID');
    await queryRunner.dropColumn('User', 'identifier_ID');
  }
}
