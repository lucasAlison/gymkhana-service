import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddGymkhanaFieldInTeam1634611053996 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'teams',
      new TableColumn({
        name: 'gymkhana_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'teams',
      new TableForeignKey({
        name: 'TeamGymkhana',
        columnNames: ['gymkhana_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'gymkhanas',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('teams', 'TeamGymkhana');

    await queryRunner.dropColumn('teams', 'gymkhana_id');
  }

}
