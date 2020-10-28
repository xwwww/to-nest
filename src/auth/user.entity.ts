import { BaseEntity, Entity, ObjectIdColumn, Column, Unique } from 'typeorm'

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @ObjectIdColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;
}