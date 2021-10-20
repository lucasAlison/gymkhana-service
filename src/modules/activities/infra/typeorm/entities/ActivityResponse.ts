import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Activity from './Activity';

@Entity('activity_responses')
class ActivityResponse {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  note: string;

  @Column()
  correct: boolean;

  @Column()
  activity_id: string | null;

  @ManyToOne(() => Activity)
  @JoinColumn({ name: 'activity_id' })
  activity: Activity;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ActivityResponse;
