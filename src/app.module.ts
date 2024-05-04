import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskStatusModule } from './task-status/task-status.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5499,
      username: 'dejeloper',
      password: 'dejeloper123**',
      database: 'opplanner_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TasksModule,
    TaskStatusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
