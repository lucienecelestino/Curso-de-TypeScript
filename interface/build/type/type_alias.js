"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function acessar(uuid, nome) {
    console.log(`ID: ${uuid} = Bem vindo ${nome}`);
}
function logUsuario(uuid) {
    console.log(`Conta referente ao UUID: ${uuid}`);
}
acessar(123, "Luciene");
acessar("55", "lucas");
logUsuario(123);
function comprarItem(moeda) {
    console.log("Comprando com a moeda: ", moeda);
}
comprarItem("USD");
