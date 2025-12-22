//exemplo simples de como ter um array em uma interface
interface ITecnologia{
    id: string;
    nome: string;
    slug: string[]; //propriedade que é um array de string
}

let tecnologia1: ITecnologia ={
    id: "1",
    nome: "TYPESCRIPT",
    slug: ["TypeScpript","TypeScpript-do-zero", "TypeScpript12"]
}

//exemplo de interface, para ser usado com array
interface ITecnologiaProps{
    id: string;
    nome: string;
    descricao?: string; 
}
// criando um array de uma interface "ITecnologiaProps"
interface INomesProps{
    tecnologia: ITecnologiaProps[] //com o colchetes se torna um array da interface "ITecnologiaProps"
}

let frontend: INomesProps = {
    tecnologia: [
        {id: "12", nome: "ReactJS",descricao: "Biblioteca para criar interfaces" }, // o que esta em parenteses é um objeto
        {id: "43", nome: "VueJs"}
    ]
}
console.log(frontend.tecnologia);