import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto, DeleteTaskDto, UpdateTaskDto } from './dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    const task: Task = this.taskRepository.create(createTaskDto);
    return await this.taskRepository.save(task);
  }

  async findAll() {
    return await this.taskRepository.find();
  }

  async findOne(id: number) {
    return await this.taskRepository.findOneBy({ id });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.taskRepository.update(id, updateTaskDto);
  }

  async remove(id: number, deleteTaskDto: DeleteTaskDto) {
    const task = await this.taskRepository.findOneBy({ id });

    task.status = false;
    task.deletedBy = deleteTaskDto.deleteBy;
    await this.taskRepository.save(task);

    return await this.taskRepository.softDelete({ id });
  }
}
