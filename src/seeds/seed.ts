// src/seeds/seed.ts
import { DataSource } from 'typeorm';
import { Categoria } from '../categorias/categoria.entity';
import * as dotenv from 'dotenv';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT!),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Categoria],
  synchronize: false,
});

async function seed() {
  await AppDataSource.initialize();
  const repo = AppDataSource.getRepository(Categoria);

  const categorias = [
    { id: 1, nombre: 'Neumáticos' },
    { id: 2, nombre: 'Chasis' },
    { id: 3, nombre: 'Motor' },
    { id: 4, nombre: 'Accesorios' },
  ];

  for (const cat of categorias) {
    const existe = await repo.findOneBy({ id: cat.id });
    if (!existe) {
      await repo.save(cat);
    }
  }

  console.log('Categorías precargadas');
  await AppDataSource.destroy();
}

seed();
