"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let estaAutenticado = true; //pode ser boolean também ex: let estaAutenticado = booleaan;
console.log(estaAutenticado);
let codeStatus = 0;
//transformando a variavel codeStatus, para boolean, tudo diferente de zero, será falso. ex: string vazia, underfined
estaAutenticado = Boolean(codeStatus);
console.log(estaAutenticado);
