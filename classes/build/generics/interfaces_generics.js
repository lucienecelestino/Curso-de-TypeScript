"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arroz = {
    marca: "Solito",
    preco: 28.00,
    formatar(valor) {
        let valorFormatado = valor.toLocaleString('pt-BR', {
            style: "currency",
            currency: "BRL"
        });
        return valorFormatado;
    }
};
console.log(arroz);
console.log(arroz.formatar(28.00));
