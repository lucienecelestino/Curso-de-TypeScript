"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificaPessoa = verificaPessoa;
function verificaPessoa(idade) {
    return (target, key, descriptor) => {
        const metodoOriginal = descriptor.value; // Salvando nosso metodo original
        //reescrevendo nosso metodo
        descriptor.value = function () {
            if (idade = 18) {
                console.log("Estamos cadastrando como Pessoa menor de idade");
            }
            else {
                console.log("Estamos cadastrando como Pessoa maior de idade");
            }
            //retornando o conteudo que tem no metodo original, ou seja o que tinha nele, antes de sobrescrevermos ele
            return metodoOriginal.apply(this);
        };
    };
}
