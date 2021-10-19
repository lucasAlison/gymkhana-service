import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('activities')
class Activity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  note: string;

  @Column()
  type: string;

  @Column()
  token: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  radius: number;

  @Column()
  points: number;

  @Column()
  time: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Activity;
