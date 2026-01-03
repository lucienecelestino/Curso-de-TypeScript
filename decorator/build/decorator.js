"use strict";
// decorator é experimental
/* DECORATOR são uma funcionalidade que permite modificar ou adicionar comportamento:

    Class
    Propriedade
    Metodos
    Parametros (Pouco usado)
    Getters / Setters (Pouco usado)

de forma declarativa e limpa,

Como criar um decorator:
é por meio de uma funcao, que recebe nome e parametro por padrao e retorna algo
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//construindo nosso decorator:
function logInfo(target) {
    //target vai receber o construtor da nossa classe
    console.log(target);
}
//utilizando como um decorator
let Sistema = class Sistema {
};
Sistema = __decorate([
    logInfo
], Sistema);
//exemplo 2
function logInfo2(mensagem) {
    return (target2) => {
        console.log(`${mensagem}, ${target2}`);
    };
}
let Sistema2 = class Sistema2 {
};
Sistema2 = __decorate([
    logInfo2("Servidor está Rodando !!")
], Sistema2);
