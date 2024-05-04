import { IsString, Length, IsOptional } from 'class-validator';

export class CreateTaskStatusDto {
  @IsString({ message: 'El nombre del estado debe ser un texto' })
  @Length(3, 255, {
    message: 'El nombre del estado debe ser entre 3 y 255 caracteres',
  })
  name: string;
  @IsString({ message: 'El usuario de creación debe ser un texto' })
  @IsOptional()
  createdBy?: string;
}
