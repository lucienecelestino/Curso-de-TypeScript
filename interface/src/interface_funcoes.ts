//ex1
interface ICursoProps{
    id: string;
    nome: string;
    preco: number;

    //definir apenas a funcao e o que ela deve esperar e retornar
    //Arrowfunction
    promocao: (preco: number) => void;
}
//funcao
function mostraPromocao(preco: number): void{
    console.log(`Promocao no curso, por apenas: R$ ${preco}`);
}

//objeto
const novoCurso: ICursoProps ={
    id: "1",
    nome: "Curso TypeScript",
    preco: 750,
    promocao: mostraPromocao //nesse caso usamos uma funcao externa "mostraPromocao", mas poderiamos fazer ela aqui mesmo da seguinte forma:
    /*promocao: (preco: number): void => {
    console.log("Promocao no curso, por apenas: R$", preco)
    }*/
}
console.log(novoCurso);
console.log(novoCurso.promocao(350));

//ex2
interface ISomaProps{
   // dentro da propria interface, criamos a funcao abaixo
    (valor1: number, valor2: number): number;
}
let somaNumeros: ISomaProps = (valor1: number, valor2: number): number =>{
    console.log(`RESULTADO: `,valor1 + valor2);

    return valor1+valor2;

}
const resultado = somaNumeros(15, 10);
console.log("Resultado da variavel: ",resultado);