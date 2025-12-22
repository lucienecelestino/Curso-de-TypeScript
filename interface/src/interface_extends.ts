//extendendo uma interface
//funciona como uma herança

/*Exemplo de um jogo ao qual se tem uma dlc*/

interface IJogoProps{
    readonly id: string;
    nome: string;
    descricao: string;
    plataforma: string[];
}

const left4dead: IJogoProps = {
    id: "90",
    nome: "Left 4 Dead 2",
    descricao: "Jogo de Acao",
    plataforma: ["PS5", "PC"]
}

/*MOSTRANDO APENAS A DLC

interface IDLCProps extends IJogoProps{ // vai extender/herdar tudo que tiver na interface IJogoProps, além do que tiver na interface IDLCProps 
    novoConteudo: string[];
}

//criando a dlc para esse jogo
const left4DeadDLC: IDLCProps = {
    id: "123",
    nome: "Left 4 Dead - Novos Mapas",
    descricao: "4 novos mapas para jogar online",
    plataforma: ["PS5", "PC"],
    novoConteudo: ["Modo Coop","+ 5 horas de jogo"]
}
console.log(left4DeadDLC);
*/



/*Agora que que mostre também meu jogo original e a dlc*/
interface IDLCProps extends IJogoProps{ // vai extender/herdar tudo que tiver na interface IJogoProps, além do que tiver na interface IDLCProps 
    jogoOriginal: IJogoProps;
    novoConteudo: string[];
}

//criando a dlc para esse jogo
const left4DeadDLC: IDLCProps = {
    id: "123",
    nome: "Left 4 Dead - Novos Mapas",
    descricao: "4 novos mapas para jogar online",
    plataforma: ["PS5", "PC"],
    novoConteudo: ["Modo Coop","+ 5 horas de jogo"],
    jogoOriginal: left4dead
}
console.log(left4DeadDLC);
