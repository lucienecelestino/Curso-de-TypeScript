let numeros: number[]; // ou pode ser assim: let numeros: Array<number>;
numeros = [12,25,265,45];
numeros.push(45);
console.log(numeros);


let filmes: string[];
filmes = ["Filme 1", "Filme2"]
console.log("Meus FIlmes ",filmes);


//Array com mais de um tipo
let jogos: Array<string | number>; // ou let jogos: (string | number)[];
jogos = ["Futebol", "Basquete", 2025];
console.log(jogos);