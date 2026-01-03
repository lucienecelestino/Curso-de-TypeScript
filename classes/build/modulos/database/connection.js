"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = connection;
exports.statusConnection = statusConnection;
//usando o export na frente da funcao, permite que eu use essa mesma funcao em outro arquivo
function connection(informacoes) {
    console.log(`CONEXAO REALIZADA COM SUCESSO !!!`, informacoes.ip);
    return true;
}
function statusConnection() {
    console.log("SERVIDOR FUNCIONANDO 100%");
}
