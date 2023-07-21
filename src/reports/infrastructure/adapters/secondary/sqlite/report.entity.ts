import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Report')
export class ReportEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  price: string;
}
