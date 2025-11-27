import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libros } from './libros.entity';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';

@Injectable()
export class LibrosService {constructor(
    @InjectRepository(Libros)
    private readonly libroRepository: Repository<Libros>,
  ) {}

  create(createLibroDto: CreateLibroDto) {
    const category = this.libroRepository.create(createLibroDto);
    return this.libroRepository.save(category);
  }

  findAll() {
    return this.libroRepository.find();
  }

  findOne(id: string) {
    return this.libroRepository.findOne({ where: { id } });
  }

  async update(id: string, updateCategoryDto: UpdateLibroDto) {
    const category = await this.libroRepository.findOne({ where: { id } });
    if (!category) return null;
    Object.assign(category, updateCategoryDto);
    return this.libroRepository.save(category);
  }

  async remove(id: string) {
    const category = await this.libroRepository.findOne({ where: { id } });
    if (!category) return null;
    return this.libroRepository.remove(category);
  }
}
