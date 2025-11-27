import { Module } from '@nestjs/common';
import { LibrosController } from './libros.controller';
import { LibrosService } from './libros.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libros } from './libros.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Libros])],
  controllers: [LibrosController],
  providers: [LibrosService]
})
export class LibrosModule {}
