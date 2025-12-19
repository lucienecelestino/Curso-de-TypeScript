"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let numeros; // ou pode ser assim: let numeros: Array<number>;
numeros = [12, 25, 265, 45];
numeros.push(45);
console.log(numeros);
let filmes;
filmes = ["Filme 1", "Filme2"];
console.log("Meus FIlmes ", filmes);
//Array com mais de um tipo
let jogos; // ou let jogos: (string | number)[];
jogos = ["Futebol", "Basquete", 2025];
console.log(jogos);
