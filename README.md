# API REST de Usuarios y Viviendas

Este proyecto es una API REST para la gestión de usuarios y sus viviendas

# Rutas y Endpoints

## Usuarios

- **GET** `/users`: Obtiene todos los usuarios.
- **GET** `/users/:userId`: Obtiene un usuario por su ID.
- **POST** `/users`: Crea un nuevo usuario.
- **PATCH** `/users/:userId`: Actualiza parcialmente un usuario.
- **PUT** `/users/:userId`: Actualiza completamente un usuario.
- **DELETE** `/users/:userId`: Borra un usuario (dará error si el usuario tiene viviendas).

## Viviendas

- **GET** `/users/:userId/houses`: Obtiene todas las viviendas de un usuario.
- **GET** `/users/:userId/houses/filters`: Obtiene todas las viviendas de un usuario con filtros opcionales (ciudad, calle, país).
- **POST** `/users/:userId/houses`: Crea una nueva vivienda para un usuario.
- **PUT** `/users/:userId/houses/:houseId`: Actualiza una vivienda de un usuario.

## Start

npm install y node server.js
Acceder a la pagina Swagger http://localhost:3000/api-docs/


