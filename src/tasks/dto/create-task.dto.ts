import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';

export class CreateTaskDto {
  @IsString({ message: 'El título debe ser un texto' })
  @Length(3, 255, { message: 'El título debe ser entre 3 y 255 caracteres' })
  title: string;

  @IsString({ message: 'La descripción debe ser un texto' })
  @Length(3, 255, {
    message: 'La descripción debe ser entre 3 y 255 caracteres',
  })
  description: string;

  @IsString({ message: 'Las etiquetas deben ser un texto' })
  @IsOptional()
  tags?: string;

  @IsBoolean({ message: 'El estado debe ser un booleano' })
  @IsOptional()
  status?: boolean;

  @IsString({ message: 'El usuario de creación debe ser un texto' })
  @IsOptional()
  createdBy?: string;
}
