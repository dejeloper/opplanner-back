import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TaskStatusService } from './task-status.service';
import {
  CreateTaskStatusDto,
  DeleteTaskStatusDto,
  UpdateTaskStatusDto,
} from './dto';

@Controller('task-status')
export class TaskStatusController {
  constructor(private readonly taskStatusService: TaskStatusService) {}

  @Post()
  create(@Body() createTaskStatusDto: CreateTaskStatusDto) {
    return this.taskStatusService.create(createTaskStatusDto);
  }

  @Get()
  findAll() {
    return this.taskStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.taskStatusService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  ) {
    return this.taskStatusService.update(id, updateTaskStatusDto);
  }

  @Delete(':id')
  remove(
    @Param('id') id: number,
    @Body() deleteTaskStatusDto: DeleteTaskStatusDto,
  ) {
    return this.taskStatusService.remove(id, deleteTaskStatusDto);
  }
}
