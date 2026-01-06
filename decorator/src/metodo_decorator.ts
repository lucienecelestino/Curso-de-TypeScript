//Decorator de Metodo so e chamado. quando nosso metodo for chamado em algum local

function verificaPessoa(idade: number){
    return(target: any, key: string, descriptor: PropertyDescriptor) => {
     //MOSTRANDO O QUE TEM DENTRO DESSAS VARIAVEIS
        // console.log("Target", target);
        // console.log("Key", key);
        // console.log("Descriptor", descriptor);

        const metodoOriginal = descriptor.value// Salvando nosso metodo original

        //reescrevendo nosso metodo
        descriptor.value = function (){
           if(idade = 18){
            console.log("Estamos cadastrando como Pessoa menor de idade");
           }else{
            console.log("Estamos cadastrando como Pessoa maior de idade");
           }

           //retornando o conteudo que tem no metodo original, ou seja o que tinha nele, antes de sobrescrevermos ele
           return metodoOriginal.apply(this);
        }

    }
}

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