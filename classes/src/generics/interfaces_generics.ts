interface NovoProduto<T extends number>{
    marca: string;
    preco: T;

    //metodo
    formatar(valor: T): string;
}

const arroz: NovoProduto<number> = { //o que esta dentro de"<>" é determinando exatamente qual é o tipo do nosso generic
    marca: "Solito",
    preco: 28.00,
    formatar(valor:number): string{
        let valorFormatado = valor.toLocaleString('pt-BR',{
            style: "currency",
            currency: "BRL"
        })
        
        return valorFormatado;
    }
}

console.log(arroz);
console.log(arroz.formatar(28.00));