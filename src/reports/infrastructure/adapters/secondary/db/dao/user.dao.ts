import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ReportDao } from './report.dao';
import { Exclude } from 'class-transformer';

@Entity('User')
export class UserDao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({
    unique: false,
    nullable: true,
  })
  name?: string;

  @Column()
  isAdmin: boolean;

  @Column()
  createdAt: Date;

  @OneToMany(() => ReportDao, (report) => report.user)
  reports?: ReportDao[];
}
