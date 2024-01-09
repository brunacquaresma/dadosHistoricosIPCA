![Imagem](print.png "Índice Nacional de Preços ao Consumidor Amplo (IPCA)")

# Projeto Histórico IPCA

Este projeto é uma aplicação Node.js que fornece informações sobre o Índice Nacional de Preços ao Consumidor Amplo (IPCA) com base em um histórico específico(Jan/2015 até Mai/2023). A aplicação expõe uma API RESTful que permite a busca de dados históricos, cálculo do IPCA em um intervalo específico e recuperação de registros individuais por ID.

## Pré-requisitos

Antes de iniciar, certifique-se de ter o Node.js instalado em seu ambiente de desenvolvimento.

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. **Instale as dependências:**

   ```bash
   npm install

## Uso

3. **Inicie o servidor:**

      ```bash
      node index.js   
O servidor será iniciado na porta 8080.   

4. **Acesse a API usando as seguintes rotas:**

- `/historicoIPCA`: Retorna o histórico completo do IPCA ou um histórico específico para um ano fornecido como parâmetro.   

   - Parâmetro opcional: ano (formato: YYYY)   
  
- `/historicoIPCA/calculo`: Calcula o IPCA para um intervalo de datas fornecido.   

   - Parâmetros obrigatórios: valor, mesInicial, anoInicial, mesFinal, anoFinal

- `/historicoIPCA/:id`: Retorna um registro específico com base no ID fornecido.

## Estrutura do Projeto

- **index.js**: Arquivo principal da aplicação.
- **servicos/servico.js**: Contém os serviços relacionados à lógica da aplicação.
- **dados/dados.js**: Arquivo contendo o histórico do IPCA.

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou adicionar novos recursos. Abra uma *issue* para discutir grandes mudanças antes de enviar um *pull request*.

## Autoria

Esta API foi desenvolvida por **Brunä Gomes**, com base nos conhecimentos fornecidos pelo curso **DevMedia**.
