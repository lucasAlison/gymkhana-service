import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddTrackingFieldsInActivity1635863911257 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns(
      'activities',[
        new TableColumn({
          name: 'type_tracking',
          type: 'varchar',
          isNullable: true,
        }),
        new TableColumn({
          name: 'url_tracking',
          type: 'varchar',
          isNullable: true,
        }),
        new TableColumn({
          name: 'asset_name_tracking',
          type: 'varchar',
          isNullable: true,
        }),
      ]
    );

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns('activities', [
      'type_tracking',
      'url_tracking',
      'asset_name_tracking'
    ]);
  }

}
