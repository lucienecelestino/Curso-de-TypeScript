"use strict";
//Decorator de Metodo so e chamado. quando nosso metodo for chamado em algum local
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function verificaPessoa(idade) {
    return (target, key, descriptor) => {
        //MOSTRANDO O QUE TEM DENTRO DESSAS VARIAVEIS
        // console.log("Target", target);
        // console.log("Key", key);
        // console.log("Descriptor", descriptor);
        const metodoOriginal = descriptor.value; // Salvando nosso metodo original
        descriptor.value = function () {
            if (idade = 18) {
                console.log("Estamos cadastrando como Pessoa menor de idade");
            }
            else {
                console.log("Estamos cadastrando como Pessoa maior de idade");
            }
            //retornando o conteudo que tem no metodo original, ou seja o que tinha nele, antes de alterarmos ele
            return metodoOriginal.apply(this);
        };
    };
}
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
    verificaPessoa(20)
    //metodo
], Pessoa.prototype, "cadastrarPessoa", null);
const pessoa1 = new Pessoa("Luciene");
pessoa1.cadastrarPessoa();
