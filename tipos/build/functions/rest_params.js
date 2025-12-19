"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//funcao normal
function totalVendas(venda1, venda2, venda3, venda4) {
    const total = venda1 + venda2 + venda3 + venda4;
    console.log(total);
    return total;
}
totalVendas(16, 15, 20, 25);
//funcao que recebe varios parametros, e que voce quer tratar todos eles, mesmo não sabendo a quantidade de numeros que sera recebido
// o operador ... (rest parameter) permite receber uma quantidade variável de números, que viram um array chamado vendas
function TotalVendas(...vendas) {
    const quantidadeVendas = TotalVendas.length;
    // soma de todos os valores usando o método reduce
    let valorTotal = vendas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    console.log(`Voce fez ${quantidadeVendas} vendas hoje!`);
    console.log(`O valor total vendido Hoje é: `, valorTotal);
}
TotalVendas(15, 20, 55, 65, 20);
function mostrarNomes(...nomes) {
    let totalNomes = nomes.length;
    console.log(`Temos ${totalNomes} nomes na Lista`);
    nomes.map(nome => {
        console.log(nome);
    });
}
mostrarNomes("Natan", "Henrique", "Bruna");
