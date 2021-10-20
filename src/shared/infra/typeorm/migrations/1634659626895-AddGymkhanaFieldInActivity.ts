import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddGymkhanaFieldInActivity1634659626895 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'activities',
      new TableColumn({
        name: 'gymkhana_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'activities',
      new TableForeignKey({
        name: 'ActivityGymkhana',
        columnNames: ['gymkhana_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'gymkhanas',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('activities', 'ActivityGymkhana');

    await queryRunner.dropColumn('activities', 'gymkhana_id');
  }

}
