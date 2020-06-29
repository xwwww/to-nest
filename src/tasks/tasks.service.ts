import { Injectable, NotFoundException } from '@nestjs/common';
import { Task} from './task.entity'
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto'
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRespository } from './task.repository';
import { TaskStatus } from './task-status.enum';
import { ObjectID } from 'mongodb';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRespository)
    private taskRespository: TaskRespository,
  ) {}

  async getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
    const { status, search } = filterDto

    // let select = null

    // if(status && search) {
    //   select = {
    //     where: {
    //       $and: [
    //         {
    //           status: { $in: [status] }
    //         },
    //         {
    //           $or: [
    //             {
    //               title: { $regex: search }
    //             },
    //             {
    //               description: { $regex: search }
    //             }
    //           ]
    //         }
    //       ]
    //     }
    //   }
    // }

    // if (status && !search) {
    //   select = {
    //     where: {
    //       status: { $in: [status] }
    //     }
    //   }
    // }

    // if (!status && search) {
    //   select = {
    //     where: {
    //       $or: [
    //         {
    //           title: { $regex: search }
    //         },
    //         {
    //           description: { $regex: search }
    //         }
    //       ]
    //     }
    //   }
    // }

    return this.taskRespository.getTasks(filterDto)
  }

  async getTaskById(id: ObjectID): Promise<Task> {
    const found = await this.taskRespository.findOne(id);

    if (found) {
      return found
    }
    throw new NotFoundException(`找不到${id}`)
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskRespository.createTask(createTaskDto)
  }

  async deleteTask(id: ObjectID): Promise<void> {
    const exists = ObjectID.isValid(id) && await this.getTaskById(id);
    if (exists) {
      await this.taskRespository.delete(id);
    }
  }

  async updateTaskStatus(id: ObjectID, status: TaskStatus): Promise<Task> {
    const task = await this.getTaskById(id)
    task.status = status
    await task.save()
    return task
  }
}
