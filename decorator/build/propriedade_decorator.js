"use strict";
/*Utilizacao de decorator em Propriedades:
   Validar valores - ex: validar se o valor é um email valido
   Transformar valores automaticamente - ex: transformar o valor para maiusculo
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function validaNome(tamanho) {
    // target é o construtor da classe
    // key é o nome da propriedade 
    return (target, key) => {
        //retorna exatamente o nome da propriedade
        //console.log(key);
        let valor = target[key];
        //acessa o que tem dentro dessa propriedade
        const getter = () => valor;
        //passa algum valor para a propriedade nome
        const setter = (novoValor) => {
            //fazendo as validações
            if (novoValor === "") {
                console.log("O nome não pode ser vazio !!");
            }
            else if (novoValor.length < tamanho) {
                console.log(`Você não pode criar com menos de ${tamanho} caracteres`);
            }
            else {
                valor = novoValor;
            }
        };
        //definindo o valor do nosso objeto
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
}
class Jogo {
    nome;
    //reaproveitando o decorator
    descricao;
    // o constructor serve para inicializar (configurar) o objeto recém-criado.
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
    }
}
__decorate([
    validaNome(5) // aqui estamos passando o tamanho minimo do nome
], Jogo.prototype, "nome", void 0);
__decorate([
    validaNome(20)
], Jogo.prototype, "descricao", void 0);
const jogo1 = new Jogo("Fortnite", "Jogo que oferece experiencia de tiro, construção, corridas, música e eventos ao vivo e muito mais");
console.log(jogo1);
