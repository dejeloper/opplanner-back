import { TaskStatus } from 'src/task-status/entities/task-status.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  tags: string;

  @ManyToOne(() => TaskStatus, (ts) => ts.id, { eager: true })
  taskStatus: TaskStatus;

  @Column()
  status: boolean;

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
}
