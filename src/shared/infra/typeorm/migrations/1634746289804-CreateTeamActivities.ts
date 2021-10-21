import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTeamActivities1634746289804 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'team_activities',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'status',
            type: 'varchar',
          },
          {
            name: 'points',
            type: 'int',
            isNullable: true
          },
          {
            name: 'latitude',
            type: 'decimal',
            isNullable: true
          },
          {
            name: 'longitude',
            type: 'decimal',
            isNullable: true
          },
          {
            name: 'time',
            type: 'int',
            isNullable: true
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('team_activities');
  }

}
