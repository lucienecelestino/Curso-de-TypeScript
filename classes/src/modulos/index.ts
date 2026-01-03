//Buscar meu arquivo e conectyar com o banco de dados

import { connection, statusConnection } from "./database/connection"; 
// quando a funcao foi exportada por default, nao precisa das chaves{}, e pode atribuir qualquer nome
import statusApp from "./database/aplicativo"; 
function acessarSistema(){
    connection({ip: "192.168.54.10", nome: "MySQL"})
}

acessarSistema();

statusConnection();

statusApp();