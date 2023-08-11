import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { UserDao } from './user.dao';

@Entity('Report')
export class ReportDao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  make: string;

  @Column({
    nullable: true,
  })
  model?: string;

  @Column()
  year: number;

  @Column({
    nullable: true,
  })
  lng?: number;

  @Column({
    nullable: true,
  })
  lat?: number;

  @Column({
    nullable: true,
  })
  mileage?: number;

  @Column({ default: false })
  approved: boolean;

  @Column()
  userId: number;

  @ManyToOne(() => UserDao, (user) => user.reports)
  user: UserDao;
}
