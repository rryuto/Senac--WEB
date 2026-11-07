# Exercício — Carrinho de compras com JavaScript

## Objetivo

Desenvolver um sistema simples de carrinho de compras utilizando JavaScript, arrays, objetos, funções, estruturas de repetição e `localStorage`.

O sistema deve permitir adicionar e remover produtos e manter os dados salvos mesmo quando o usuário fechar ou atualizar a página.

## 1. Criar o carrinho

- Crie um array chamado `carrinho` para armazenar os produtos.
- Ao iniciar o sistema, verifique se já existem produtos salvos no `localStorage`.
- Se houver dados salvos, recupere os produtos. Caso contrário, inicialize um array vazio.

## 2. Criar a função `Add()`

A função deve receber dois parâmetros, o nome e o valor do produto.

- Crie um objeto contendo o nome e o valor do produto.
- Adicione o objeto ao array `carrinho`.
- Atualize os dados no `localStorage` utilizando `JSON.stringify()`.

## 3. Criar a função `Delete()`

A função deve receber o nome do produto como parâmetro.

- Percorra os produtos armazenados no `carrinho` utilizando `for`.
- Verifique se o nome do produto corresponde ao nome informado.
- Se encontrar o produto, remova-o utilizando `splice()`.
- Atualize os dados no `localStorage` após a remoção.

## 4. Realizar testes

Utilize as chamadas de teste fornecidas no enunciado.

> As chamadas de teste ainda não foram fornecidas.
