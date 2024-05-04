import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';
import { CreateTaskStatusDto } from './create-task-status.dto';

export class DeleteTaskStatusDto extends PartialType(CreateTaskStatusDto) {
  @IsString({ message: 'El usuario de eliminación debe ser un texto' })
  @IsOptional()
  deleteBy?: string;
}
