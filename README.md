# Car shop Projetct

<details>
<summary>PT-BR</summary>
  
## Descrição

Este projeto consiste em uma API com CRUD para gerenciar uma concessionária de veículos.
  
## Tecnologias

- Node;
- TypeScript;
- Mongoose;
- MongoDB;
- Docker;
  
## Como rodar esse projeto

- Clone o projeto: `git clone git@github.com:VictorMattV/car_shop_project.git`;
- Suba os containers: `docker-compose up -d`;
- Inicialize a aplicação: `npm run dev`.  

## Endpoints

A seguir, estão descritos os endpoints da aplicação:

### Cadastro de Carros

`POST /cars`

Endpoint responsável pelo cadastro de um novo carro.

#### Body:

`{  "model":  "Marea",  "year":  2002,  "color":  "Black",  "status":  true,  "buyValue":  15.990,  "doorsQty":  4,  "seatsQty":  5  }` 

#### Resposta:

`{  "_id":  "6157f3c3e962cd7e0c51259b",  "model":  "Marea",  "year":  2002,  "color":  "Black",  "status":  true,  "buyValue":  15990,  "doorsQty":  4,  "seatsQty":  5,  "__v":  0  }` 

### Listagem de Carros

`GET /cars`

Endpoint responsável pela listagem de carros cadastrados na concessionária.

### Listar carro por ID

`GET /cars/:id`

Endpoint responsável por listar um carro específico através do seu ID.

### Atualizar carro por ID

`PUT /cars/:id`

Endpoint responsável por atualizar um carro específico através do seu ID.

#### Body:

`{  "model":  "Marea",  "year":  1992,  "color":  "Red",  "status":  true,  "buyValue":  12.000,  "doorsQty":  2,  "seatsQty":  5  }`

#### Resposta:

`{  "_id":  "6157f3c3e962cd7e0c51259b",  "model":  "Marea",  "year":  1992,  "color":  "Red",  "status":  true,  "buyValue":  12000,  "doorsQty":  2,  "seatsQty":  5,  "__v":  0  } `

 
### Cadastro de Motos

`POST /motorcycles`

Endpoint responsável pelo cadastro de uma nova moto.

#### Body:

`{  "model":  "Honda Cb 600f Hornet",  "year":  2005,  "color":  "Yellow",  "status":  true,  "buyValue":  30000,  "category":  "Street",  "engineCapacity":  600  }` 

#### Resposta:

`{  "_id":  "6158f3c3e558cde0c51259b",  "model":  "Honda Cb 600f Hornet",  "year":  2005,  "color":  "Yellow",  "status":  true,  "buyValue":  30000,  "category":  "Street",  "engineCapacity":  600, "__v":  0  }` 

### Listagem de Motos

`GET /motorcycles`

Endpoint responsável pela listagem de motos cadastrados na concessionária.

### Listar moto por ID

`GET /motorcycles/:id`

Endpoint responsável por listar uma moto específica através do seu ID.

### Atualizar moto por ID

`PUT /moto/:id`

Endpoint responsável por atualizar uma moto específica através do seu ID.

#### Body:

`{ "model":  "Honda Cb 600f Hornet",  "year":  2015,  "color":  "Red",  "status":  true,  "buyValue":  45000,  "category":  "Street",  "engineCapacity":  600}`

#### Resposta:

`{  "_id":  "8938f3d5f991cd5e1c51260b",  model":  "Honda Cb 600f Hornet",  "year":  2015,  "color":  "Red",  "status":  true,  "buyValue":  45000,  "category":  "Street",  "engineCapacity":  600  "__v":  0  } `


### Cobertura de Testes

Foram escritos testes para cobrir 80% da camada de Services, utilizando stub do banco de dados MongoDB.
  
</details>

<details>
<summary>EN</summary>

## Description

This project consists of an API with CRUD to manage a car dealership.
  
## Technologies

- Node;
- TypeScript;
- Mongoose;
- MongoDB;
- Docker;
  
## How to run this project

- Clone the project: `git clone git@github.com:VictorMattV/car_shop_project.git`;
- Upload the containers: `docker-compose up -d`;
- Start the application: `npm run dev`.  

## Endpoints

The application endpoints are described below:

### Car Registration

`POST /cars`

Endpoint responsible for registering a new car.

#### Body:

`{ "model": "Marea", "year": 2002, "color": "Black", "status": true, "buyValue": 15,990, "doorsQty": 4, "seatsQty": 5 }`

#### Response:

`{ "_id": "6157f3c3e962cd7e0c51259b", "model": "Marea", "year": 2002, "color": "Black", "status": true, "buyValue": 15990, "doorsQty": 4, "seatsQty": 5, "__v": 0 }`

### Car Listing

`GET /cars`

Endpoint responsible for listing cars registered at the dealership.

### List car by ID

`GET /cars/:id`

Endpoint responsible for listing a specific car through its ID.

### Update car by ID

`PUT /cars/:id`

Endpoint responsible for updating a specific car through its ID.

#### Body:

`{ "model": "Marea", "year": 1992, "color": "Red", "status": true, "buyValue": 12,000, "doorsQty": 2, "seatsQty": 5 }`

#### Response:

`{ "_id": "6157f3c3e962cd7e0c51259b", "model": "Marea", "year": 1992, "color": "Red", "status": true, "buyValue": 12000, "doorsQty": 2, "seatsQty": 5, "__v": 0 } `

 
### Motorcycle Registration

`POST /motorcycles`

Endpoint responsible for registering a new motorcycle.

#### Body:

`{ "model": "Honda Cb 600f Hornet", "year": 2005, "color": "Yellow", "status": true, "buyValue": 30000, "category": "Street", "engineCapacity" : 600 }`

#### Response:

`{ "_id": "6158f3c3e558cde0c51259b", "model": "Honda Cb 600f Hornet", "year": 2005, "color": "Yellow", "status": true, "buyValue": 30000, "category" : "Street", "engineCapacity": 600, "__v": 0 }`

### Motorbike Listing

`GET /motorcycles`

Endpoint responsible for listing motorcycles registered at the dealership.

### List bike by ID

`GET /motorcycles/:id`

Endpoint responsible for listing a specific motorcycle through its ID.

### Update bike by ID

`PUT /moto/:id`

Endpoint responsible for updating a specific motorcycle through its ID.

#### Body:

`{ "model": "Honda Cb 600f Hornet", "year": 2015, "color": "Red", "status": true, "buyValue": 45000, "category": "Street", "engineCapacity" : 600}`

#### Response:

`{ "_id": "8938f3d5f991cd5e1c51260b", model": "Honda Cb 600f Hornet", "year": 2015, "color": "Red", "status": true, "buyValue": 45000, "category": "Street", "engineCapacity": 600 "__v": 0 } `


### Test Coverage

Tests were written to cover 80% of the Services layer, using the MongoDB database stub.


</details>
  
