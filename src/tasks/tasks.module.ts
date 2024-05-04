import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { TaskStatusModule } from 'src/task-status/task-status.module';
import { TaskStatusService } from 'src/task-status/task-status.service';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), TaskStatusModule],
  controllers: [TasksController],
  providers: [TasksService, TaskStatusService],
})
export class TasksModule {}
