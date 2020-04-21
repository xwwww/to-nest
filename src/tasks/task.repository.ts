import { Task } from './task.entity'
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(Task)
export class TaskRespository extends Repository<Task> {

}