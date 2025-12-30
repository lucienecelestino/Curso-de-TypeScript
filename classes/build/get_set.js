"use strict";
//Getter (get): Método especial que permite ler uma propriedade como se fosse um campo normal, 
// executando lógica personalizada (ex: cálculo ou formatação) ao acessar o valor.
//Setter (set): Método especial que permite atribuir um valor a uma propriedade,
//  executando lógica personalizada (ex: validação ou transformação) antes de salvar o novo valor.
Object.defineProperty(exports, "__esModule", { value: true });
class Jogo {
    servidor;
    id = '1234';
    constructor(servidor) {
        this.servidor = servidor;
    }
    //metodo GET vai pegar o valor ao inves de acessar diretamente a propriedade
    get getServidorIP() {
        console.log("== TESTANDO O METODO GET ==");
        return this.servidor;
    }
    //metodo SET serve para passar ou alterarum atributo
    set setServidorIP(novoIP) {
        if (this.servidor === novoIP) {
            throw new Error("O novo IP deve ser diferente do IP antigo");
        }
    }
}
const GTA5 = new Jogo("192.168.5.10");
console.log(GTA5);
//como criamos como private, não conseguimos acessar dessa forma:
//GTA5.id; 
//GTA5.servidor;
//agorafunciona 
try {
    GTA5.setServidorIP = "192.200.250.9";
}
catch (error) {
    console.log("Erro: ", error.message);
}
console.log(GTA5.getServidorIP);
