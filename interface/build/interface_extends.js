"use strict";
//extendendo uma interface
//funciona como uma herança
Object.defineProperty(exports, "__esModule", { value: true });
const left4dead = {
    id: "90",
    nome: "Left 4 Dead 2",
    descricao: "Jogo de Acao",
    plataforma: ["PS5", "PC"]
};
//criando a dlc para esse jogo
const left4DeadDLC = {
    id: "123",
    nome: "Left 4 Dead - Novos Mapas",
    descricao: "4 novos mapas para jogar online",
    plataforma: ["PS5", "PC"],
    novoConteudo: ["Modo Coop", "+ 5 horas de jogo"],
    jogoOriginal: left4dead
};
console.log(left4DeadDLC);
