import { Controller, Get, Post, Body, Delete, Param, Patch, Query, UsePipes, ValidationPipe, Catch, ParseIntPipe} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task} from './task.entity'
import { TaskStatus } from './task-status.enum'
import { CreateTaskDto } from './dto/create-task.dto'
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto'
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe'

@Catch()
@Controller('tasks')
export class TasksController {
  constructor(private tasksServices: TasksService) {}

  @Get()
  getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto): Promise<Task[]> {
    if (Object.keys(filterDto).length) {
      return this.tasksServices.getTasksWithFilters(filterDto)
    } else {
      return this.tasksServices.getAllTasks()
    }
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksServices.getTaskById(id)
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksServices.createTask(createTaskDto)
  }

  // @Delete('/:id')
  // deleteTask(@Param('id') id: string): void {
  //   this.tasksServices.deleteTask(id)
  // }

  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body('status', TaskStatusValidationPipe) status: TaskStatus
  // ): Task {
  //   return this.tasksServices.updateTaskStatus(id, status)
  // }
}
