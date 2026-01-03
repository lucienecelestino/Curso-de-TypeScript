"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//importando meu decorator, criado em outro arquivo ("virifica_pessoa")
const verifica_pessoa_1 = require("./verifica_pessoa");
class Pessoa {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
    //decorator
    //metodo
    cadastrarPessoa() {
        console.log(`Bem Vindo ${this.nome} ao Sistema!`);
    }
}
__decorate([
    (0, verifica_pessoa_1.verificaPessoa)(20)
    //metodo
], Pessoa.prototype, "cadastrarPessoa", null);
const pessoa1 = new Pessoa("Luciene");
pessoa1.cadastrarPessoa();
