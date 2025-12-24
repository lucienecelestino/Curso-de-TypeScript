//exemplo de type alias:
type Status = "Aberta" | "Fechada";

class Loja{
    //atributos da nossa classe
    nome: string;
    categoria: string;

    //dentro de constructor, nos passamos, quais os parametros essa classe vai receber
    constructor(nome: string, categoria: string){
        this.nome = nome; //fazendo a relação entre os parametros do construtor e os atributos da classe
        this.categoria = categoria;
    }

    //metodo sem parametro
    criarLoja(): void{
        console.log(`Loja: ${this.nome}, categoria: ${this.categoria}`)
    }

     //metodo com parametro
     emitirPedido(mesa: number, ...pedidos:string[]): string{
        //percorrendo no array pedidos, através de uma função anonima:
        pedidos.map((pedido) =>{
            console.log(`Saindo novo pedido: ${pedido}`)
        })
        return `Pedido na mesa: ${mesa}`;
    }
    mudarStatus(status: Status): void{
        if(status === "Aberta"){
            console.log("LOJA ABERTA COM SUCESSO!!!");
        }else{
            console.log("LOJA FECHADA!")
        }
    }
}

    

const redBurger = new Loja("Red Burguer", "lanches");
redBurger.criarLoja();
redBurger.mudarStatus("Aberta");  
const returnLoja = redBurger.emitirPedido(55, "Suco gelado", "Coca-Cola", "Hamburguer");
console.log(returnLoja);


//segunda Loja:
const loja2 = new Loja("Sorveteria", "sorvetes");
loja2.criarLoja();

