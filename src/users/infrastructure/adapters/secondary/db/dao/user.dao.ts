import { ReportDao } from '@src/reports/infrastructure/adapters/secondary/db/dao/report.dao';
import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @OneToMany(() => ReportDao, (report) => report.user)
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
