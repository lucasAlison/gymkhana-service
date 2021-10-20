import Gymkhana from '@modules/gymkhanas/infra/typeorm/entities/Gymkhana';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
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

  @Column()
  gymkhana_id: string | null;

  @ManyToOne(() => Gymkhana)
  @JoinColumn({ name: 'gymkhana_id' })
  gymkhana: Gymkhana;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Activity;
