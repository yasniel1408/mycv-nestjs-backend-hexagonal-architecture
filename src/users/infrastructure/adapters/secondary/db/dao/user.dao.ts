import { Exclude, Transform, Type } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ReportDao } from './report.dao';
import moment from 'moment';

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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @OneToMany((type) => ReportDao, (report) => report.user)
  @Type()
  reports?: ReportDao[];

  // @AfterInsert()
  // logInstert() {
  //   // eslint-disable-next-line no-console
  //   console.log('Insert ID: ', this.id);
  // }

  // @AfterUpdate()
  // logUpdate() {
  //   // eslint-disable-next-line no-console
  //   console.log('Update ID: ', this.id);
  // }

  // @AfterRemove()
  // logRemove() {
  //   // eslint-disable-next-line no-console
  //   console.log('Remove ID: ', this.id);
  // }
}
