// Tipo desconhecido - Quando voce nao sabe que tipo voce vai receber, por exemplo nao sabe o que vai receber de uma API
// variaveis desse tipo só podem ser atribuidas como any ou unknown
let idPedidio: any = 123;
let totalPedido: unknown = 15;

let entregador: number = idPedidio;
let totalEntrega: unknown = totalPedido;

console.log(entregador);
console.log(totalEntrega);