// Classe abstrata - Classe abstrata é um molde que define o que as classes filhas devem ter e fazer, mas não pode ser usada diretamente.

// Não pode ser instanciada: new ClasseAbstrata() dá erro.
// É feita para ser herdada: Outras classes usam extends ClasseAbstrata.

type DadosConta = {
    nome: string;
    numero: string;
    endereco: string;
}
abstract class ContaBanco{
    abstract abrirConta(dados: DadosConta): boolean;
}

class PessoaFisica extends ContaBanco{
    abrirConta(dados: DadosConta): boolean {
        console.log(`NOva conta P.Fisica criada com sucesso ${dados.nome}`)
        return true;
    }
}

class PessoaJuridica extends ContaBanco{
    abrirConta(dados: DadosConta): boolean {
        console.log(`NOva conta P.Juridica criada com sucesso ${dados.nome}`)
        return true;
    }
}

const joana = new PessoaFisica();
joana.abrirConta({
    nome: "Joana Silva",
    numero: "154-x",
    endereco: "Rua 15 de novembro, bairro Centro"
})

const mariana = new PessoaJuridica();
mariana.abrirConta({
    nome: "Mariana Silva",
    numero: "15",
    endereco: "Rua das Bromélias"

})