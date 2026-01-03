/*
TypeScript (e JavaScript) não suporta herança múltipla de classes (uma classe só pode estender uma outra classe).
Mixins são um padrão que permite "misturar" funcionalidades de várias classes em uma única classe, 
simulando herança múltipla.
*/

import { applyMixins } from "./applyMixin";  

class Automovel{
    ligar(): void{
        console.log("Automóvel ligado com sucesso !!")
    }

    desligar(): void {
        console.log("Desligando automóvel !!")
    }
}

class Especificacao{
    descricao: string;

    constructor(descricao: string){
        this.descricao = descricao;
    }
}

/*dessa forma a erro, pois pode estender apenas uma classe
class Carro extends Automovel, Especificacao{

}
*/
// agora usando o mixin
class Carro{
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }
}

interface Carro extends Automovel, Especificacao{}

applyMixins(Carro, [Automovel, Especificacao]);

const gol = new Carro ("Gol 1.6");
gol.ligar();
gol.descricao = "Modelo completo";
console.log(gol);
gol.desligar();