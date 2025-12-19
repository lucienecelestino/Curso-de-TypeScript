"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//funcao
function mostraPromocao(preco) {
    console.log(`Promocao no curso, por apenas: R$ ${preco}`);
}
//objeto
const novoCurso = {
    id: "1",
    nome: "Curso TypeScript",
    preco: 750,
    promocao: mostraPromocao //nesse caso usamos uma funcao externa "mostraPromocao", mas poderiamos fazer ela aqui mesmo da seguinte forma:
    /*promocao: (preco: number): void => {
    console.log("Promocao no curso, por apenas: R$", preco)
    }*/
};
console.log(novoCurso);
console.log(novoCurso.promocao(350));
let somaNumeros = (valor1, valor2) => {
    console.log(`RESULTADO: `, valor1 + valor2);
    return valor1 + valor2;
};
const resultado = somaNumeros(15, 10);
console.log("Resultado da variavel: ", resultado);
