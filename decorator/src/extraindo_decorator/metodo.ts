
//importando meu decorator, criado em outro arquivo ("virifica_pessoa")
import { verificaPessoa } from "./verifica_pessoa";

class Pessoa{
    nome: string
    constructor (nome: string){
        this.nome = nome;
    }
    //decorator
    @verificaPessoa(20)
    //metodo
    cadastrarPessoa(){
        console.log(`Bem Vindo ${this.nome} ao Sistema!`)
    }
}

const pessoa1 = new Pessoa("Luciene");

pessoa1.cadastrarPessoa();