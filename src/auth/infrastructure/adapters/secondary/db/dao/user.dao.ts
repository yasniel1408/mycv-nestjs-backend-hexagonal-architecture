import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class UserDao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    unique: false,
    nullable: true,
  })
  name?: string;

  @Column({ default: true })
  isAdmin: boolean;

  @Column({
    nullable: true,
    length: 500,
  })
  refreshToken: string;

  @CreateDateColumn()
  createdAt: Date;
}
