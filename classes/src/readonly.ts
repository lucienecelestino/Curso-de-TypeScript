//podemos ver e ler esse atributo porem nao podemos altera-lo
class Pessoa{
    readonly id: string = "123";
    nome: string;
    idade: number;

constructor(nome: string, idade:number){
    this.nome = nome;
    this.idade = idade;
    }
}

const ana = new Pessoa("Ana Carol", 29);

console.log(ana);