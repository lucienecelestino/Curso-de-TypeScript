// O tipo tupla não existe no JavaScript apenas no TypeScript
// ele estipula quantos itens irá ter na array e quais serão os tipos

let aluno: [string, number]; // precisa seguir a mesma ordem que foi possado aqui
aluno = ["Luciene", 24];
aluno.push("Lucas", 30);

console.log(aluno);

let pedido: [string, string, string];
pedido = ["Em produção","Saiu para entrega","Pedido entregue"];
