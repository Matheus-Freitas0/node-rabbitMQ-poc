
# RabbitMQ PoC em Node.js

Este projeto é uma Prova de Conceito (PoC) que demonstra o uso do RabbitMQ com Node.js, implementando um **Produtor** que envia mensagens e um **Consumidor** que as recebe. Esse exemplo básico pode ser expandido para diversas aplicações que requerem filas e mensagens assíncronas.

## Requisitos

- **Node.js** (>= v12)
- **RabbitMQ** (instalado e rodando)

Você pode utilizar Docker para rodar o RabbitMQ:

	docker run -d --hostname my-rabbit --name some-rabbit -p 5672:5672 -p 15672:15672 rabbitmq:management` 

## Configuração do Projeto

Clone este repositório e instale as dependências:
`git clone https://github.com/Matheus-Freitas0/node-rabbitMQ-poc.git
cd node-rabbitMQ-poc
npm install` 

## Estrutura do Projeto

-   `producer.js`: Contém a lógica para o **Produtor** que envia mensagens para a fila RabbitMQ.
-   `consumer.js`: Contém a lógica para o **Consumidor** que recebe e exibe as mensagens.

## Uso

### 1. Inicie o Consumidor

Em um terminal, execute o arquivo `consumer.js` para começar a ouvir as mensagens na fila:

`node consumer.js` 

### 2. Envie uma Mensagem com o Produtor

Em outro terminal, execute o arquivo `producer.js` para enviar uma mensagem para a fila:

`node producer.js` 

### Resultado Esperado

No terminal onde o **Consumidor** está em execução, você verá a mensagem recebida:

`Received: Hello RabbitMQ!` 

No terminal do **Produtor**, você verá a confirmação de que a mensagem foi enviada:


`Sent: Hello RabbitMQ!` 

## Expansões Possíveis

Este exemplo pode ser expandido com diversas funcionalidades, como:

-   **Filas duráveis** e persistência de mensagens.
-   Roteamento avançado com **Exchanges** e **Routing Keys**.
-   Tratamento de erros e reconexão automática.

## Tecnologias Utilizadas

-   **Node.js**
-   **RabbitMQ**
-   **amqplib**: Biblioteca para conectar ao RabbitMQ em Node.js

## Autor

Criado por [Matheus Freitas](https://github.com/Matheus-Freitas0)

## Licença
Este projeto é distribuído sob a licença MIT.
