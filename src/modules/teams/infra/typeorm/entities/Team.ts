import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Gymkhana from '@modules/gymkhanas/infra/typeorm/entities/Gymkhana';
@Entity('teams')
class Team {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

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

export default Team;
