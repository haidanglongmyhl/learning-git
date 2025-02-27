import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  Name: string;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  description: string;
}
