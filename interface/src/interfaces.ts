//interface: são contratos que definem a estrutura de objetos, especificando quais propriedades e métodos eles devem ter, é como um modelo que deve ser seguido
// pode ser usado em objetos, funcoes e variaveis

//exemplo de um objeto normal:
let loja: object;

loja = 
{
    nome: "Lojas Mel",
    endereco: "Rua logo ali",
    status: true
}

//exemplo com o objeto usando INTERFACE
interface ILojaProps
{
    nome: string;
    endereco: string;
    status: boolean;
 
}

//utilizando o que foi estipulado na interface, no nosso objeto BurgerK
const BurgerK: ILojaProps = 
{
    nome: "Burger K",
    endereco: "Rua logo ali",
    status: true
    //promocao: "burguer duplo" //como esse ultimo elemento não foi definida preveamente na interface, então não é possivel utliza-la 
}

console.log(BurgerK);

//exemplo uma funcao normal:
function novaLoja(nome: string, endereco: string, status: boolean): void
{
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Endereco da loja: ${endereco}!`);
    console.log(`Status da loja: ${status}!`);
   
}
novaLoja("Subway", "Rua x", true);

//exemplo uma funcao usando interface:
// precisa passar em formato de Objeto "{}"
function novaLoja1({nome, endereco, status}: ILojaProps): void
{
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Endereco da loja: ${endereco}`);
    console.log(`Status da loja: ${status}`);

    console.log("==================================================")
   
}
// loja 1
novaLoja1({nome: "Red Burguer", endereco: "Rua ali na esquina",status: false});

//loja2
novaLoja1({nome: "Mc Donalds", endereco: "Rua lá longe",status: true});