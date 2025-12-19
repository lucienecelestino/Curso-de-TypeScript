"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//como deixar um valor por default ou deixar ele opcional
//idade?: number // esse comando mostra que pode ser opcional prencher ele ou com um number ou vazio
// na variavle nome, caso eu não passe nada, ficara como padrao Aluno, e não apresentará erro
function cadastro(email, senha, nome = "Aluno", idade) {
    let data = { email, senha, nome, idade };
    console.log(data);
}
cadastro("teste@teste.com", "123", "Luciene");
function cadastroloja(nome, email, status = false) {
    console.log("Status da loja :", status);
    return status;
}
cadastroloja("Burger K", "bk@teste.com");
