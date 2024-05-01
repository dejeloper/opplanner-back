import {
  IsNumber,
  IsPositive,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class UpdateTaskDto {
  @IsString({ message: 'El título debe ser un texto' })
  @Length(3, 255, { message: 'El título debe ser entre 3 y 255 caracteres' })
  title: string;
  @IsString({ message: 'La descripción debe ser un texto' })
  @Length(3, 255, {
    message: 'La descripción debe ser entre 3 y 255 caracteres',
  })
  description: string;
  @IsNumber({}, { message: 'La duración debe ser un número' })
  @IsPositive({ message: 'La duración debe ser un número positivo' })
  @Min(1, { message: 'La duración debe ser mayor a 0' })
  @Max(24, { message: 'La duración debe ser menor a 24' })
  duration: number;
}
