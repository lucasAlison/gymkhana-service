import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Team from './Team';
import Activity from '@modules/activities/infra/typeorm/entities/Activity';
import ActivityResponse from '@modules/activities/infra/typeorm/entities/ActivityResponse';
import User from '@modules/users/infra/typeorm/entities/User';

@Entity('team_activities')
class TeamActivities {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  status: string;

  @Column()
  points: number;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  time: number;

  @Column()
  team_id: string | null;

  @ManyToOne(() => Team)
  @JoinColumn({ name: 'team_id' })
  team: Team;

  @Column()
  activity_id: string | null;

  @ManyToOne(() => Team)
  @JoinColumn({ name: 'activity_id' })
  activity: Activity;

  @Column()
  activity_response_id: string | null;

  @ManyToOne(() => Team)
  @JoinColumn({ name: 'activity_response_id' })
  activity_response: ActivityResponse;

  @Column()
  participant_id: string | null;

  @ManyToOne(() => Team)
  @JoinColumn({ name: 'participant_id' })
  participant: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default TeamActivities;
