"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nome = "TypeScript";
// nome = 10; //como a primeira variavel foi definida como string, ela nao pode ser alterada para um numero. chamado de type inference(tipagem dinamica)
console.log(nome);
let tecnologia = ["PHP", "JavaScript", "TypeScript"];
tecnologia.push("React");
//nao e possivel adicionar um numero a um array de strings, a menos que eu crie ela dinamicamente, ou seja com numeros e strings
//tecnologia.push(2025); 
console.log(tecnologia);
let dinamico = ["luciene", 24, true];
console.log(dinamico);
