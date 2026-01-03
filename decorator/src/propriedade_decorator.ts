 /*Utilizacao de decorator em Propriedades:
    Validar valores - ex: validar se o valor é um email valido
    Transformar valores automaticamente - ex: transformar o valor para maiusculo
*/

function validaNome(tamanho: number){
    // target é o construtor da classe
    // key é o nome da propriedade 
    return(target: any, key: string) => {
        //retorna exatamente o nome da propriedade
        //console.log(key);
        let valor = target[key];

        //acessa o que tem dentro dessa propriedade
        const getter = () => valor;

        //passa algum valor para a propriedade nome
        const setter = (novoValor: string) => {
        
            //fazendo as validações
            if(novoValor === ""){
                console.log("O nome não pode ser vazio !!");
             }else if(novoValor.length < tamanho){
                console.log(`Você não pode criar com menos de ${tamanho} caracteres`);
             }else{
                valor = novoValor;
             }
        }
      
        
      //definindo o valor do nosso objeto
      Object.defineProperty(target, key, {
        get: getter,
        set: setter
     })

   }
}
    

class Jogo{

    @validaNome(5) // aqui estamos passando o tamanho minimo do nome
    nome: string;

    //reaproveitando o decorator
    @validaNome(20)
    descricao: string;

    // o constructor serve para inicializar (configurar) o objeto recém-criado.
    constructor(nome: string, descricao: string){
        this.nome = nome;
        this.descricao = descricao; 
    }
}

const jogo1 = new Jogo("Fortnite", "Jogo que oferece experiencia de tiro, construção, corridas, música e eventos ao vivo e muito mais");
console.log(jogo1);