import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('libros')
export class Libros {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  isbn: number;

  @Column()
  titulo: string;

  @Column()
  autor: string;

  @Column()
  editorial: string;

  @Column()
  anio_publicacion: Date;

  @Column()
  categoria: string;

  @Column()
  num_paginas: Number;

  @Column()
  ubicacion: string;

  @Column()
  estado: boolean;

  @Column()
  copias_disponibles: Number;

}