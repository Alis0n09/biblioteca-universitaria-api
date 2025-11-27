import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';

export class CreateLibroDto {

  @IsNumber()
  isbn: number;

  @IsString()
  titulo: string;

  @IsString()
  autor: string;

  @IsString()
  editorial: string;

  @IsDate()
  anio_publicacion: Date;

  @IsString()
  categoria: string;

  @IsNumber()
  num_paginas: Number;

  @IsString()
  ubicacion: string;

  @IsBoolean()
  estado: boolean;

  @IsNumber()
  copias_disponibles: Number;

}
