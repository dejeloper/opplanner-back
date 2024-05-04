import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto, DeleteTaskDto, UpdateTaskDto } from './dto';
import { TaskStatus } from 'src/task-status/entities/task-status.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,

    @InjectRepository(TaskStatus)
    private readonly taskStatusRepository: Repository<TaskStatus>,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    const taskStatus = await this.taskStatusRepository.findOneBy({
      id: createTaskDto.taskStatus,
    });

    if (!taskStatus) {
      return { message: 'El estado de la tarea no existe' };
    }

    const task: Task = this.taskRepository.create({
      ...createTaskDto,
      taskStatus,
    });
    return await this.taskRepository.save(task);
  }

  async findAll() {
    return await this.taskRepository.find();
  }

  async findOne(id: number) {
    return await this.taskRepository.findOneBy({ id });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    // return await this.taskRepository.update(id, updateTaskDto);
    return;
  }

  async remove(id: number, deleteTaskDto: DeleteTaskDto) {
    // const task = await this.taskRepository.findOneBy({ id });

    // task.status = false;
    // task.deletedBy = deleteTaskDto.deleteBy;
    // await this.taskRepository.save(task);

    // return await this.taskRepository.softDelete({ id });
    return;
  }
}
