import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';
import { CreateTaskDto } from './create-task.dto';

export class DeleteTaskDto extends PartialType(CreateTaskDto) {
  @IsString({ message: 'El usuario de eliminación debe ser un texto' })
  @IsOptional()
  deleteBy?: string;
}
