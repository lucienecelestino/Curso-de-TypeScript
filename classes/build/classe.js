"use strict";
/*Classe:
Uma classe armazena as carcteristicas e as acoes que esse objeto vai possuir
ou seja conjunto de atributos e metodos*/
Object.defineProperty(exports, "__esModule", { value: true });
class Loja {
    //atributos da nossa classe
    nome;
    categoria;
    //dentro de constructor, nos passamos, quais os parametros essa classe vai receber
    constructor(nome, categoria) {
        this.nome = nome; //fazendo a relação entre os parametros do construtor e os atributos da classe
        this.categoria = categoria;
    }
}
const redBurger = new Loja("Red Burguer", "lanches");
// dando exemplo com uma nova loja
const sucos = new Loja("Sucao Gelado", "sucos");
console.log(redBurger.nome);
console.log(sucos.nome);
