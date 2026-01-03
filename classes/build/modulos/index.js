"use strict";
//Buscar meu arquivo e conectyar com o banco de dados
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./database/connection");
// quando a funcao foi exportada por default, nao precisa das chaves{}, e pode atribuir qualquer nome
const aplicativo_1 = __importDefault(require("./database/aplicativo"));
function acessarSistema() {
    (0, connection_1.connection)({ ip: "192.168.54.10", nome: "MySQL" });
}
acessarSistema();
(0, connection_1.statusConnection)();
(0, aplicativo_1.default)();
