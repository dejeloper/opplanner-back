import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsString({ message: 'El usuario de actualización debe ser un texto' })
  @IsOptional()
  updatedBy?: string;
}
