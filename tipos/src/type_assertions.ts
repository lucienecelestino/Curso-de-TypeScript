// Afirmando algum tipo
let statusAtual: unknown = 1;
let mudaStatus: number = 0;

//Estou afirmando que statusAtual é de fato um numero
mudaStatus = statusAtual as number;


//outra forma de afirmar é:
mudaStatus = <number>statusAtual;
console.log(mudaStatus);


let query: unknown = 'pizza';
//exemplo afirmando que é uma string
let searchTerm: string = query as string;
console.log('Seach TERM: ', searchTerm);
