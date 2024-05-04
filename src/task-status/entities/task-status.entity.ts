import { Task } from 'src/tasks/entities/task.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class TaskStatus {
  @PrimaryGeneratedColumn()
  @Column({ primary: true, generated: true })
  id: number;

  @Column({ unique: true, length: 50 })
  name: string;

  @Column({ default: 'Admin' })
  createdBy: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ nullable: true })
  updatedBy: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  deletedBy: string;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Task, (t) => t.taskStatus)
  tasks: Task[];
}
