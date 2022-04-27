# 📚 API Bookstore 📚

  ![Image](./public/images/library.jpg)
### Descrição

 - Projeto de API REST para alimentação do projeto final (módulo 5) da formação em Desenvolvimento Web Full Stack @ Resilia. 
 - O projeto é uma adaptação do projeto do módulo 4 e interage com informações do banco de dados de uma livraria, com a intenção de criar um sistema de estoque. 
 - As principais mudanças em relação ao módulo passado foram: 
   - escolha de duas entidades: book e user
   - uso de banco de dados não-relacional.

### Modelagem do banco de dados

  
  ![Image](./public/images/db_diagram.PNG)

### Como executar o projeto
- Você precisa ter instalada em sua máquina a versão 16.14.0 do NodeJS, o VSCode e o Insomnia;
- Faça clone do seguinte repositório:
 
    ```js
    git clone https://github.com/carollyb/bookstore-api.git
    ```

- Abra o projeto no VSCode, abra o terminal e assegure-se que está na pasta `bookstore-api`. Caso esteja em uma pasta acima, execute o seguinte comando:
  ```js
  cd bookstore-api
-  Instale as dependências
     ```js
     npm install
- Renomeie o arquivo de `.env.example` para `.env` na pasta raiz do projeto, e coloque a conexão com o banco de dados
- Inicie o projeto
   ```js
   npm start


### Estrutura da API: rotas possíveis
<span style="color: green"> POST: </span>
  - /books (Cria um cadastro de um novo livro. Deve passar o objeto no corpo da requisição. O id não é necessário pois é gerado automaticamente através da biblioteca uuid)
  
<span style="color: purple"> GET: </span> 
  - /books (Lista todos os títulos cadastrados)
  - /books/`:title` (Lista títulos que sejam exatamente iguais ao título passado como parâmetro)

<span style="color: orange"> PUT: </span>
  - /books/`:id` (Atualiza todos os atributos de um livro cadastrado. Deve passar o objeto com todos os atributos no corpo da requisição, com exceção do id, que não deve ser alterado manualmente)

<span style="color: yellow"> PATCH: </span>
  - /books/`:id` (Atualiza um ou mais atributos de um livro cadastrado, com exceção do id. Deve passar um ou mais atributos no corpo da requisição, e o id como parâmetro)

<span style="color: red"> DELETE: </span>
  - /books/`:id` (Deleta um livro do banco de dados. Deve passar o id do livro como parâmetro)

### Exemplos de endpoints
- Endpoint da requisição do cadastro de um novo livro:
  ```js
  {
	"id": "f4d8510a-9e5b-40a4-9e38-8aea2917a2be",
	"title": "Sample Book",
	"author": "Sample Author",
	"language": "English",
	"num_pages": 20,
	"publication_date": "1927-12-12T00:00:00.000Z",
	"publisher": "Sample Publisher",
    "price": 49.90,
    "userId": "75d8510a-9e5b-40a4-9e38-8aea2917a2be"
  }
  ```
- Endpoint de tentativa de cadastro de livro com título que já existe:
  ```js
  {
	"error": "This book already exists on our database"
  }
  ```

### Deploy

[Heroku-API-Bookstore](https://api-bookstore-mod5.herokuapp.com/)

### Tecnologias utilizadas

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

- NodeJS
- Express
- Prisma ORM
- MongoDB
- Insomnia

- Bibliotecas: 
  - Joi (validação de campos)
  - JWT (autenticação com token)
  - Bcrypt (encriptação da senha)
  - Cors (permitir o consumo pelo frontend)
  - uuid (geração de ids automáticos)

