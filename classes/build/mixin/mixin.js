"use strict";
/*
TypeScript (e JavaScript) não suporta herança múltipla de classes (uma classe só pode estender uma outra classe).
Mixins são um padrão que permite "misturar" funcionalidades de várias classes em uma única classe,
simulando herança múltipla.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const applyMixin_1 = require("./applyMixin");
class Automovel {
    ligar() {
        console.log("Automóvel ligado com sucesso !!");
    }
    desligar() {
        console.log("Desligando automóvel !!");
    }
}
class Especificacao {
    descricao;
    constructor(descricao) {
        this.descricao = descricao;
    }
}
/*dessa forma a erro, pois pode estender apenas uma classe
class Carro extends Automovel, Especificacao{

}
*/
// agora usando o mixin
class Carro {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
(0, applyMixin_1.applyMixins)(Carro, [Automovel, Especificacao]);
const gol = new Carro("Gol 1.6");
gol.ligar();
gol.descricao = "Modelo completo";
console.log(gol);
gol.desligar();
