"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    4 MODIFICADORES:
    Public
    Private
    Protected - protegido - pode ser acessado dentro da classe que ele criou, bem como dentro da classe filha
    readonly - não pode modificar, apenas ver e acessar o valor dele
    */
class Usuario {
    nome;
    email;
    //O constructor é responsável por configurar o objeto recém-criado, 
    // geralmente atribuindo valores iniciais às suas propriedades.
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}
class Admin extends Usuario {
    cargo;
    nivel;
    // declaração da classe pai(Usuario)      declaração da classe Admin
    constructor(nome, email, cargo, nivel) {
        //super - serve para acessar ou chamar coisas da classe pai.
        super(nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
    mudarCargo() {
        console.log("ALTERANDO CARGO");
    }
}
const usuario1 = new Admin("Luciene", "luciene@teste.com", "Programadora", 2);
console.log(usuario1);
usuario1.mudarCargo();
