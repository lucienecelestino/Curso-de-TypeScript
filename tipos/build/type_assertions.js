"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Afirmando algum tipo
let statusAtual = 1;
let mudaStatus = 0;
//Estou afirmando que statusAtual é de fato um numero
mudaStatus = statusAtual;
//outra forma de afirmar é:
mudaStatus = statusAtual;
console.log(mudaStatus);
let query = 'pizza';
//exemplo afirmando que é uma string
let searchTerm = query;
console.log('Seach TERM: ', searchTerm);
