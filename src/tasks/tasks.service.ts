import { Injectable, NotFoundException } from '@nestjs/common';
import { Task} from './task.entity'
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto'
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRespository } from './task.repository';
import { TaskStatus } from './task-status.enum';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRespository)
    private taskRespository: TaskRespository,
  ) {}

  async getAllTasks(): Promise<Task[]> {
    return await this.taskRespository.find()
  }

  async getTasksWithFilters(filterDto: GetTasksFilterDto): Promise<Task[]> {
    const { status, search } = filterDto
    console.log(filterDto)
    let tasks = this.getAllTasks()
    // if (status) {
    //   tasks = await this.taskRespository.find()
    // }
    // if (search) {
    //   // tasks = await this.taskRespository.find()
    // }
    return tasks
  }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.taskRespository.findOne(id);

    if (found) {
      return found
    }
    throw new NotFoundException(`找不到${id}`)
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto
    const task = new Task()
    task.title = title
    task.description = description
    task.status = TaskStatus.OPEN
    await task.save()
    return task
  }

  // deleteTask(id: string): void {
  //   const found = this.getTaskById(id)
  //   this.tasks = this.tasks.filter(task => task.id !== found.id)
  // }

  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(id)
  //   task.status = status
  //   return task
  // }
}
