import { Injectable } from '@nestjs/common';
import {
  CreateTaskStatusDto,
  DeleteTaskStatusDto,
  UpdateTaskStatusDto,
} from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskStatus } from './entities/task-status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskStatusService {
  constructor(
    @InjectRepository(TaskStatus)
    private readonly taskStatusRepository: Repository<TaskStatus>,
  ) {}

  async create(createTaskStatusDto: CreateTaskStatusDto) {
    const taskStatus: TaskStatus =
      this.taskStatusRepository.create(createTaskStatusDto);
    return await this.taskStatusRepository.save(taskStatus);
  }

  async findAll() {
    return await this.taskStatusRepository.find();
  }

  async findOne(id: number) {
    return await this.taskStatusRepository.findOneBy({ id });
  }

  async update(id: number, updateTaskStatusDto: UpdateTaskStatusDto) {
    return await this.taskStatusRepository.update(id, updateTaskStatusDto);
  }

  async remove(id: number, deleteTaskStatusDto: DeleteTaskStatusDto) {
    const taskStatus = await this.taskStatusRepository.findOneBy({ id });
    taskStatus.deletedBy = deleteTaskStatusDto.deleteBy;
    await this.taskStatusRepository.save(taskStatus);

    return await this.taskStatusRepository.softDelete({ id });
  }
}
