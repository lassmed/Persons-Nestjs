import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';
import { SkillEntity } from '../../skill/entities/skill.entity';

@Entity('cv')
export class CvEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  firstname: string;
  @Column()
  age: number;
  @Column()
  cin: string;
  @Column()
  job: string;
  @Column()
  path: string;

  @ManyToOne(() => UserEntity, (user) => user.cvs)
  user: UserEntity;

  @ManyToMany(() => SkillEntity, (skill) => skill.cvs,{eager:true})
  @JoinTable()
  skills: SkillEntity[];
}
