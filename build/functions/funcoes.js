"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// quando declaro como void, estou especificando que essa funcao nunca vai retornar nada
function login(username) {
    let message = "Bem vindo " + username;
    console.log(message);
}
login("sujeito programador");
// exemplo quando declaro a funcao como boolean, estou especificando que ira me retornar verdadeiro ou falso
function login2(username) {
    let message = "Bem vindo " + username;
    console.log(message);
    return true;
}
const retornoFuncao = login2("sujeito programador");
console.log(retornoFuncao);
//dessa forma garante-se que a gunção só pode receber numeros
let n1 = 10;
let n2 = 25;
function soma(valor1, valor2) {
    let soma = valor1 + valor2;
    return soma;
}
console.log(soma(n1, n2));
let ex1 = 10;
let ex2 = 25;
function somaex2(valor1, valor2) {
    let somaex = valor1 + valor2;
    if (somaex > 20) {
        return 'Soma é maior que 20';
    }
    else {
        return 'Menor que 20';
    }
}
console.log(somaex2(ex1, ex2));
