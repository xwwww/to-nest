import { BaseEntity, Entity, ObjectIdColumn, Column, ObjectID } from 'typeorm';
import { TaskStatus } from './task-status.enum';

@Entity()
export class Task extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;
}