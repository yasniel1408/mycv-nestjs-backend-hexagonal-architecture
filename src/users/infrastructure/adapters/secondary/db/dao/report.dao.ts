import { UserDao } from '@users/infrastructure/adapters/secondary/db/dao/user.dao';
import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';

@Entity('Report')
export class ReportDao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  make: string;

  @Column()
  price: number;

  @Column()
  year: number;

  @ManyToOne(() => UserDao, (user) => user.reports)
  user: UserDao;
}
