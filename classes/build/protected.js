"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    //por ser protected a variavel id só pode ser chamado na classe pai (usuario),
    //  ou classe que extendem as classes de usuario, ou seja as filhas
    id;
    nome;
    email;
    //O constructor é responsável por configurar o objeto recém-criado, 
    // geralmente atribuindo valores iniciais às suas propriedades.
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}
class Admin extends Usuario {
    cargo;
    nivel;
    // declaração da classe pai(Usuario)      declaração da classe Admin
    constructor(id, nome, email, cargo, nivel) {
        //super - serve para acessar ou chamar coisas da classe pai.
        super(id, nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
    mudarCargo(cargo) {
        console.log("ALTERANDO CARGO PARA: ", cargo);
        console.log("Id do usuário", this.id); // já aqui funciona acessar o id, pois acessa por meio de uma classe filha
    }
    //como o método mudarCargo se tornou protected, não consegumos acessar ela a não ser que eu esteja dentro da classe Admin,
    //entao criei um novo metodo, so que publico
    acessarAdmin() {
        this.mudarCargo("Desing");
    }
}
const usuario1 = new Admin(1, "Luciene", "luciene@teste.com", "Programadora", 2);
console.log(usuario1);
//usuario1.id; -- mostrando que não deixa acessar o id, pois é protected
//usuario1.mudarCargo(); //assim não funciona
usuario1.acessarAdmin(); // assim funciona
