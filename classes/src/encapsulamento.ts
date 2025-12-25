/*
    4 MODIFICADORES: 
    Public
    Private
    Protected - protegido - pode ser acessado dentro da classe que ele criou, bem como dentro da classe filha
    readonly - não pode modificar, apenas ver e acessar o valor dele
    */
class Usuario{
    public nome: string;
    public email: string;

//O constructor é responsável por configurar o objeto recém-criado, 
// geralmente atribuindo valores iniciais às suas propriedades.
    constructor(nome: string, email: string){
        this.nome = nome;
        this.email = email;
    }

}

class Admin extends Usuario{
    public cargo: string;
    public nivel: number;

    // declaração da classe pai(Usuario)      declaração da classe Admin
    constructor(nome: string, email: string, cargo: string, nivel: number){
       //super - serve para acessar ou chamar coisas da classe pai.
        super(nome, email);

        this.cargo = cargo;
        this.nivel = nivel;
    }
    public mudarCargo(): void{
        console.log("ALTERANDO CARGO");
    }
}

const usuario1 = new Admin("Luciene", "luciene@teste.com", "Programadora", 2);
console.log(usuario1);

usuario1.mudarCargo();