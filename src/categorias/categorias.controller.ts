import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { CategoriasService } from './categorias.service';

@Controller('categoria') 
export class CategoriasController {
  constructor(private readonly service: CategoriasService) {}

  @Get(':id')
  async getCategoria(@Param('id') id: string) {
    const categoria = await this.service.findOne(Number(id));
    if (!categoria) {
      throw new NotFoundException(`Categoría con ID ${id} no encontrada`);
    }
    return categoria;
  }
}
