type Info = {
    id: number;
    nome: string;
    descricao?: string;
}

const produtoInfo: Info ={
    id: 123,
    nome: "Placa de Video",
    descricao: "Placa GTX5241"

} 

type Categoria ={
    slug: string;
    quantidadeProduto: number;
}

const categoria1: Categoria={
    slug: "hardware",
    quantidadeProduto: 2
}

// Produtoinfo sera a intercessao (uniao) entre o tipo info e a categoria 
type ProdutoInfo = Info & Categoria
const novoProduto: ProdutoInfo = {
    id: 145,
    nome: "Teclado RGB",
    descricao: "",
    quantidadeProduto: 10,
    slug: "teclado-mecânico"
}
console.log(novoProduto);