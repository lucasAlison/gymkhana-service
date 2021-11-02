import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddActivityFieldInTip1635820192169 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'tips',
      new TableColumn({
        name: 'activity_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'tips',
      new TableForeignKey({
        name: 'ActivityTip',
        columnNames: ['activity_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'activities',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('tips', 'ActivityTip');

    await queryRunner.dropColumn('tips', 'activity_id');
  }

}
