"use strict";
/*
Generics (ou genéricos) permitem criar componentes reutilizáveis (funções, classes, interfaces) que funcionam com vários tipos
 de dados, mantendo a segurança de tipos.
Em vez de escrever a mesma função várias vezes (uma para string, outra para number, etc.), ou usar any (que desativa a
verificação de tipos), você usa um parâmetro de tipo
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
Alguns padroes que podemos encontrar:
    S => State
    T => Type
    K => Key
    Y => Value
    E => Element
*/
//COM GENERIC                                          //SEM GENERIC
function repositorio() {
    let dados; //let dados: number | string;
    function getDados() {
        return dados; //return dados;     
    } //}
    function setDados(novoDado) {
        dados = novoDado; // dados = novoDado;
    } //}
    return { getDados, setDados }; //return {getDados, setDados}
} //}
const repositorio1 = repositorio(); //const repositorio1 =  repositorio();
repositorio1.setDados(15); //repositorio1.setDados(15);
repositorio1.setDados("15"); ///repositorio1.setDados("15");   
//não funciona, pois só recebe dtring ou number
//repositorio1.setDados(true);   
console.log(repositorio1.getDados()); //console.log(repositorio1.getDados());
//Por que o código abaixo da erro? 
//como meu repositorio do tipo "T" é tipado por String oui Number, o generic não deixa utilizar outro tio 
//const repositorio2 = repositorio<boolean>()
//repositorio2.setDados(true);
