// o Tipo NULL: espaço que foi definido, mas é nulo

let nome: null;
//por exemplo, esse comando vai dar erro:
//nome = "Teste";

let id: string | null;
//dessa forma não da erro, pois a variavel id, tem dois valores possiveis
id = "Teste";
console.log(id);

//Tipo Underfined: representa a ausência de um valor atribuído, nao foi definida
let userNome: undefined;
// se tentar atribuir um tipo depois de declarado como undefined, dara erro
//ex: userNome = "Lucas";
console.log(userNome);