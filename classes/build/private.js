"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    //private não pode ser acessado ou modificado fora da classe
    limite = 450;
    //metodo
    aumentarLimite(quantidade) {
        if (quantidade < 1000) {
            this.limite = quantidade;
            console.log(`Agora seu limite é: ${this.limite}`);
        }
        else {
            console.log(`Infelizmente seu Limite foi REPROVADO`);
        }
    }
    //METOD PROTECTED
    solicitarLimite(quantidade) {
        return this.aumentarLimite(quantidade);
    }
    //METODO PUBLICO
    solicitarLimiteApp(estaAltenticado, quantidade) {
        if (estaAltenticado) {
            this.aumentarLimite(quantidade);
        }
        else {
            return false;
        }
    }
}
//Classe Filha
class bancoAfiliado extends Conta {
    limiteAfiliado() {
        return this.solicitarLimite(1500);
    }
}
const fulano = new Conta();
//fulano.limite; //não funciona
//fulano.aumentarLimite; //não funciona
fulano.solicitarLimiteApp(true, 700); //agora funciona, pois não esta acessando aumentarLimite diretamente
console.log(fulano);
const joao = new bancoAfiliado();
joao.limiteAfiliado();
console.log(joao);
