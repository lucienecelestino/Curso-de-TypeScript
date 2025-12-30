"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//podemos ver e ler esse atributo porem nao podemos altera-lo
class Pessoa {
    id = "123";
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
const ana = new Pessoa("Ana Carol", 29);
console.log(ana);
