import { Exclude } from 'class-transformer';
import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInstert() {
    // eslint-disable-next-line no-console
    console.log('Insert ID: ', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    // eslint-disable-next-line no-console
    console.log('Update ID: ', this.id);
  }

  @AfterRemove()
  logRemove() {
    // eslint-disable-next-line no-console
    console.log('Remove ID: ', this.id);
  }
}
