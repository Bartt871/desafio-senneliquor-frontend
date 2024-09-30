[__TOC__]

## Como Subit o Projeto

Para efetuar o login, é necessário seguir os passos do projeto [backend](https://gitlab.com/will871/desafio-senneliquor).

### Requisitos:

 - Docker;
 - Make

### Passos

#### Subir e acessar o container

Execute o comando `make up` para que o docker inicie, em seguida `make react` para acessar o `container react`.

#### Executar projeto

No `container react`, execute o comando `make install` para instalar os pacotes, e `make start` para iniciar o projeto que será espelhado na `porta 3000`.

#### Visualizando o projeto

Acesse [localhost](http://localhost:3000) para acessar a home page.