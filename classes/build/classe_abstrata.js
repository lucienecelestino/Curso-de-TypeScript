"use strict";
// Classe abstrata - Classe abstrata é um molde que define o que as classes filhas devem ter e fazer, mas não pode ser usada diretamente.
Object.defineProperty(exports, "__esModule", { value: true });
class ContaBanco {
}
class PessoaFisica extends ContaBanco {
    abrirConta(dados) {
        console.log(`NOva conta P.Fisica criada com sucesso ${dados.nome}`);
        return true;
    }
}
class PessoaJuridica extends ContaBanco {
    abrirConta(dados) {
        console.log(`NOva conta P.Juridica criada com sucesso ${dados.nome}`);
        return true;
    }
}
const joana = new PessoaFisica();
joana.abrirConta({
    nome: "Joana Silva",
    numero: "154-x",
    endereco: "Rua 15 de novembro, bairro Centro"
});
const mariana = new PessoaJuridica();
mariana.abrirConta({
    nome: "Mariana Silva",
    numero: "15",
    endereco: "Rua das Bromélias"
});
