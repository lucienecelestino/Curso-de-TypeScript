interface ICadastroProps{
    nome: string;
    email?: string; //o "?", permite deixar o e-mail opcional ou não
    status: boolean;
}
const novoUsuario: ICadastroProps = {
    nome: "teste",
    email: "teste@teste.com",
    status: true
}
console.log(novoUsuario);

//exemplo com funcao, sem ser descontruir o objeto, e usar diretamente o nome:
function novoUser(usuario: ICadastroProps){
    console.log(usuario.nome)
}

novoUser({nome: "Luciene", status: true});