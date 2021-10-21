import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddDependecyFieldsInActivityTeam1634777150068 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'team_activities',
      new TableColumn({
        name: 'team_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'team_activities',
      new TableForeignKey({
        name: 'TeamActivityTeam',
        columnNames: ['team_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'teams',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.addColumn(
      'team_activities',
      new TableColumn({
        name: 'activity_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'team_activities',
      new TableForeignKey({
        name: 'TeamActivityActivity',
        columnNames: ['activity_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'activities',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.addColumn(
      'team_activities',
      new TableColumn({
        name: 'activity_response_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'team_activities',
      new TableForeignKey({
        name: 'TeamActivityActivityResponse',
        columnNames: ['activity_response_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'activity_responses',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.addColumn(
      'team_activities',
      new TableColumn({
        name: 'participant_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'team_activities',
      new TableForeignKey({
        name: 'TeamActivityParticipant',
        columnNames: ['participant_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('team_activities', 'TeamActivityTeam');
    await queryRunner.dropColumn('team_activities', 'team_id');

    await queryRunner.dropForeignKey('team_activities', 'TeamActivityActivity');
    await queryRunner.dropColumn('team_activities', 'activity_id');

    await queryRunner.dropForeignKey('team_activities', 'TeamActivityActivityResponse');
    await queryRunner.dropColumn('team_activities', 'activity_response_id');

    await queryRunner.dropForeignKey('team_activities', 'TeamActivityParticipant');
    await queryRunner.dropColumn('team_activities', 'participant_id');
  }

}
