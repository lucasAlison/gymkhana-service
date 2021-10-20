import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddActivityFieldInActivityResponse1634724360805 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'activity_responses',
      new TableColumn({
        name: 'activity_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'activity_responses',
      new TableForeignKey({
        name: 'ActivityAResponse',
        columnNames: ['activity_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'activities',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('activity_responses', 'ActivityAResponse');

    await queryRunner.dropColumn('activity_responses', 'activity_id');
  }

}
