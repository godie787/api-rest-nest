import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './categoria.entity';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)
    private repo: Repository<Categoria>,
  ) {}

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }
}