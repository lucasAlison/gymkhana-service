import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AddTeamFieldInUser1634496197182 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn(
        'users',
        new TableColumn({
          name: 'team_id',
          type: 'uuid',
          isNullable: true,
        }),
      );

      await queryRunner.createForeignKey(
        'users',
        new TableForeignKey({
          name: 'UserTeam',
          columnNames: ['team_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'teams',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('users', 'UserTeam');

      await queryRunner.dropColumn('users', 'team_id');
    }

}
