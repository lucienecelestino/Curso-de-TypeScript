//TypeAlias
type NovoProduto<T extends number | string> = {
    marca: string;
    preco: T;
}

const arroz: NovoProduto<number | string> = { //o que esta dentro de"<>" é determinando exatamente qual é o tipo do nosso generic
    marca: "Solito",
    preco: 28.00
}

console.log(arroz);