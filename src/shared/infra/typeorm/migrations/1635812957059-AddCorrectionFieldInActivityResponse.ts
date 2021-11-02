import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddCorrectionFieldInActivityResponse1635812957059 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'activity_responses',
      new TableColumn({
        name: 'correction',
        type: 'varchar',
        isNullable: true,
      }),
    );

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('activity_responses', 'correction');
  }

}
