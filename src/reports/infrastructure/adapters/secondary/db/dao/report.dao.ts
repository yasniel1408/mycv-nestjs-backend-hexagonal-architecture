import { UserDao } from '@users/infrastructure/adapters/secondary/db/dao/user.dao';
import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';

@Entity('Report')
export class ReportDao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  lng: number;

  @Column()
  lat: number;

  @Column()
  mileage: number;

  @Column({ default: false })
  approved: boolean;

  @Column()
  userId: number;

  @ManyToOne(() => UserDao, (user) => user.reports)
  user: UserDao;
}
