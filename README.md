# ToDoList - CRUD de Estudos

Este é um projeto de estudo para aprender a desenvolver o backend de uma aplicação ToDoList, utilizando as tecnologias Express, MySQL2, Docker, Nodemon, e Node.js.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no backend.
- **Express**: Framework para construção de APIs e servidores web em Node.js.
- **MySQL2**: Biblioteca para integração com o banco de dados MySQL.
- **Docker**: Contêineres para criar ambientes de desenvolvimento isolados e consistentes.
- **Nodemon**: Ferramenta para reiniciar o servidor automaticamente durante o desenvolvimento.

## Funcionalidades

Este projeto implementa um sistema simples de ToDoList, permitindo as seguintes operações:

- **Criar**: Adicionar uma nova tarefa à lista.
- **Ler**: Exibir todas as tarefas cadastradas.
- **Atualizar**: Editar uma tarefa existente.
- **Deletar**: Remover uma tarefa.

## Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/get-started)
- [MySQL](https://www.mysql.com/)

### Passo a Passo

1. **Clone o repositório:**


git clone https://github.com/seu-usuario/todolist-crud.git
cd todolist-crud

2. **Crie e configure o banco de dados com Docker:**
docker-compose up -d

3. ** Instale as dependências:**
npm install

4.  **Configure o banco de dados:**
No arquivo config/database.js, configure as credenciais para a conexão com o MySQL (caso necessário).

5. **Inicie o servidor**:
npm run dev

Endpoits em desenvolvimento !

GET /todos: Retorna todas as tarefas.
POST /todos: Cria uma nova tarefa. (Requer corpo com title e status)
PUT /todos/:id: Atualiza uma tarefa existente. (Requer corpo com title e status)
DELETE /todos/:id: Deleta uma tarefa.

**EXEMPLO DE REQUISIÇÂO**

**Criar uma tarefa ==>**
POST/todos
Content-Type: application/json

{
  "title": "Estudar Node.js",
  "status": "Praticar criação de APIs com Node.js"
}

**Editar tarefa**
PUT /todos/1
Content-Type: application/json

{
  "title": "Estudar Node.js e Express",
  "description": "Praticar criação de APIs com Node.js e Express"
}

**Deletar tarefa**
DELETE /todos/1


Esse `README.md` fornece as informações essenciais para entender e rodar esse mini projeto, com a explicação de como configurar o ambiente, usar a API.
