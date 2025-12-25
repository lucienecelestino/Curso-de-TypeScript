//HERANCA - quando se temos uma classe pai, e queremos que a classe filha tenha acesso aos atributos e métodos,
// alem de seus proprios atributos

class Usuario{
    nome: string;
    email: string;

//O constructor é responsável por configurar o objeto recém-criado, 
// geralmente atribuindo valores iniciais às suas propriedades.
    constructor(nome: string, email: string){
        this.nome = nome;
        this.email = email;
    }

}

class Admin extends Usuario{
    cargo: string;
    nivel: number;

    // declaração da classe pai(Usuario)      declaração da classe Admin
    constructor(nome: string, email: string, cargo: string, nivel: number){
       //super - serve para acessar ou chamar coisas da classe pai.
        super(nome, email);

        this.cargo = cargo;
        this.nivel = nivel;
    }
}

const usuario1 = new Admin("Luciene", "luciene@teste.com", "Programadora", 2);
console.log(usuario1);