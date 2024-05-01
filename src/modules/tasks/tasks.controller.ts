import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @ApiTags('Tasks')
  @Get('/')
  @ApiOperation({ description: 'Get all tasks' })
  @HttpCode(200)
  async getAllTasks() {
    const allTasks = await this.tasksService.getAllTasks();

    if (allTasks.length === 0)
      return new NotFoundException('No tasks found').getResponse();

    return {
      statusCode: 200,
      message: 'Tasks retrieved successfully',
      tasks: allTasks,
    };
  }

  @ApiTags('Tasks')
  @Get('/:id')
  @HttpCode(200)
  async getTask(@Param('id', ParseIntPipe) id: number) {
    const taskFound = await this.tasksService.getTaskById(id);

    if (!taskFound) {
      return new NotFoundException(`Task with ${id} not found`).getResponse();
    }

    return {
      statusCode: 200,
      message: 'Task retrieved successfully',
      task: taskFound,
    };
  }

  @ApiTags('Tasks')
  @Post('/')
  @HttpCode(201)
  async createTask(@Body() data: CreateTaskDto) {
    const newTask = await this.tasksService.createTask(data);
    if (!newTask)
      return new BadRequestException('Task not created1').getResponse();

    return {
      statusCode: 201,
      message: 'Task created successfully',
      task: newTask,
    };
  }

  @ApiTags('Tasks')
  @Put('/:id')
  @HttpCode(200)
  async updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: CreateTaskDto,
  ) {
    const taskFound = await this.tasksService.getTaskById(id);

    if (!taskFound)
      return new NotFoundException(`Task with ${id} not found`).getResponse();

    const taskUpdate = await this.tasksService.updateTask(id, data);

    return {
      statusCode: 200,
      message: 'Task updated successfully',
      task: taskUpdate,
    };
  }

  @ApiTags('Tasks')
  @Delete('/:id')
  @HttpCode(200)
  async deleteTask(@Param('id', ParseIntPipe) id: number) {
    try {
      const taskFound = await this.tasksService.getTaskById(id);

      if (!taskFound)
        return new NotFoundException(`Task with ${id} not found`).getResponse();

      const taskDelete = await this.tasksService.deleteTask(id);

      return {
        statusCode: 200,
        message: 'Task deleted successfully',
        task: taskDelete.id,
      };
    } catch (error) {
      throw new BadRequestException('Task not deleted').getResponse();
    }
  }
}
