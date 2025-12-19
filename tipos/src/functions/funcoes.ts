// quando declaro como void, estou especificando que essa funcao nunca vai retornar nada
function login(username: string): void{
    let message = "Bem vindo " + username;

    console.log(message);
}
login("sujeito programador");

// exemplo quando declaro a funcao como boolean, estou especificando que ira me retornar verdadeiro ou falso
function login2(username: string): boolean{
    let message = "Bem vindo " + username;
 
    console.log(message);
    return true;

}

const retornoFuncao = login2("sujeito programador");
console.log(retornoFuncao); 

//dessa forma garante-se que a gunção só pode receber numeros
let n1: number = 10;
let n2: number = 25;

function soma(valor1: number, valor2: number): number{ //esse ultimo number é o que essa função espera como retorno
    let soma = valor1 + valor2;
    return soma;
}
    

console.log(soma(n1,n2));

let ex1: number = 10;
let ex2: number = 25;

function somaex2(valor1: number, valor2: number): string{ //esse ultimo number é o que essa função espera como retorno
    let somaex = valor1 + valor2;

    if(somaex > 20){
        return 'Soma é maior que 20';
    }else{
        return 'Menor que 20'
    }
}

console.log(somaex2(ex1,ex2));