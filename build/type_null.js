"use strict";
// o Tipo NULL: espaço que foi definido, mas é nulo
Object.defineProperty(exports, "__esModule", { value: true });
let nome;
//por exemplo, esse comando vai dar erro:
//nome = "Teste";
let id;
//dessa forma não da erro, pois a variavel id, tem dois valores possiveis
id = "Teste";
console.log(id);
//Tipo Underfined: representa a ausência de um valor atribuído, nao foi definida
let userNome;
// se tentar atribuir um tipo depois de declarado como undefined, dara erro
//ex: userNome = "Lucas";
console.log(userNome);
