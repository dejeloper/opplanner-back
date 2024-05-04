import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskStatusDto } from './create-task-status.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateTaskStatusDto extends PartialType(CreateTaskStatusDto) {
  @IsString({ message: 'El usuario de actualización debe ser un texto' })
  @IsOptional()
  updatedBy?: string;
}
