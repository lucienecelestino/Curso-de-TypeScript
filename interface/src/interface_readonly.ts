// O READONLY é utilizada quando precisamos de uma interface que o usuario so possa ler, 
// sem alterar o valor que vai ter dentro dela

//sem readonly
interface IProdutoProps{
    id: string;
    nome: string;
    descricao: string;
}

let produto1: IProdutoProps ={
   id: "1",
    nome: "Tenis Nike",
    descricao: "Altamente confortavel"
}

console.log(produto1);
// provando que é possivel mudar o valor do id do nosso objeto pode mudar
produto1.id = "123";


//exemplo utilizanbdo Readonly
interface IProduto2Props{
    readonly id: string;
    nome: string;
    descricao: string;
}

let produto2: IProduto2Props ={
    id: "2",
    nome: "Tenis Adidas",
    descricao: "Desing casual"
}

console.log(produto2);
// provando que é não possivel mudar o valor do id do nosso objeto, pois da erro
//produto2.id = "123";