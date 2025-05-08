# Desafío Técnico – API REST con NestJS y PostgreSQL

## 🧪 Requisitos Técnicos

- **NestJS**: versión 11.0.1
- **Node.js**: versión 11.0.7 o superior
- **PostgreSQL**: versión 16 o superior
- **Docker**: versión 28.0.4 o superior
- **Docker Compose**: v2.34.0-desktop.1 o superior
- **Git**: para clonar el repositorio 
- **Editor de código recomendado**: Visual Studio Code

## 📝 Descripción del Proyecto

Este proyecto implementa una **API REST** utilizando **NestJS** que expone un endpoint para consultar categorías por ID desde una base de datos **PostgreSQL**. El entorno está completamente contenerizado con **Docker** para facilitar su ejecución en cualquier entorno local.


## 🚀 Instrucciones para Ejecutar el Proyecto

Sigue estos pasos para clonar, configurar y levantar el proyecto en tu máquina local.

### 1. Clonar el Repositorio

Primero, clona el repositorio a tu máquina local con el siguiente comando:

git clone https://github.com/godie787/api-rest-nest.git
cd api-rest-nest (directorio principal del proyecto)

### 2. Crear el Archivo `.env`

Crea un archivo `.env` a partir del archivo `.env.example` que se encuentra en el repositorio.

**Contenido de `.env`**:

DB_HOST=db
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=categorias_db

### 3. Levantar el Entorno con Docker

Levanta los contenedores de **PostgreSQL** y **NestJS API** utilizando Docker y Docker Compose con el siguiente comando:

docker-compose up -d

Este comando iniciará los contenedores en segundo plano, y podrás acceder a la API en el puerto `3000`.

### 4. Ejecutar Migraciones y Seeders

Para cargar las categorías iniciales en la base de datos, ejecuta el siguiente comando dentro del contenedor de la API:

docker exec -it api-rest-nest-api-1 npm run seed

Esto precargará los datos de las categorías en la base de datos de PostgreSQL.

### 5. Probar el Endpoint con Postman

#### URL Base:

[http://localhost:3000]

#### Ruta Completa:

/categoria/:id

**Ejemplo**: Para consultar la categoría con ID 1, realiza una solicitud GET a:

[http://localhost:3000/categoria/1]

Si la categoría existe, la respuesta será:

{
"id": 1,
"nombre": "Neumáticos"
}

Si la categoría no se encuentra, recibirás:

{
"message": "Categoría con ID {id} no encontrada"
"error": "Not Found"
"statusCode": 404
}

### 6. Probar con cURL

También puedes probar el endpoint utilizando `cURL` desde la terminal. Por ejemplo, para consultar la categoría con ID 1:

curl [http://localhost:3000/categoria/1]

La respuesta esperada será:

{
"id": 1,
"nombre": "Neumáticos"
}

---

## 📂 Explicación de los Archivos Principales

* **src/app.module.ts**: Contiene la configuración principal de NestJS y se encarga de la importación de los módulos necesarios, incluyendo la conexión a la base de datos PostgreSQL.

* **src/categorias/categorias.controller.ts**: Define el controlador que expone el endpoint `/categoria/:id` y gestiona la lógica para la consulta de las categorías.

* **src/categorias/categorias.service.ts**: Implementa la lógica para interactuar con la base de datos y devolver la categoría solicitada por su ID.

* **src/categorias/categoria.entity.ts**: Define la entidad `Categoria`, que mapea la tabla `categorias` en la base de datos PostgreSQL.

* **src/seeds/seed.ts**: Archivo que se encarga de insertar las categorías iniciales en la base de datos cuando se ejecuta el comando `npm run seed`.

---

## ⚙️ Dependencias Instaladas

- **NestJS**: ^11.0.1
- **Node.js**: 11.0.7
- **PostgreSQL**: 16
- **Docker**: 28.0.4
- **Docker Compose**: v2.34.0-desktop.1
- **TypeORM**: ^0.3.23
- **@nestjs/common**: ^11.0.1
- **@nestjs/config**: ^4.0.2
- **@nestjs/core**: ^11.0.1
- **@nestjs/typeorm**: ^11.0.0
- **pg**: ^8.15.6

