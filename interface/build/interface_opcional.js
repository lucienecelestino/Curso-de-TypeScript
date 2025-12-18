"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const novoUsuario = {
    nome: "teste",
    email: "teste@teste.com",
    status: true
};
console.log(novoUsuario);
//exemplo com funcao, sem ser descontruir o objeto, e usar diretamente o nome:
function novoUser(usuario) {
    console.log(usuario.nome);
}
novoUser({ nome: "Luciene", status: true });
