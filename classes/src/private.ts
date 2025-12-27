class Conta{
    //private não pode ser acessado ou modificado fora da classe
    private limite: number = 450;
    
    //metodo
    private aumentarLimite(quantidade: number){
        if(quantidade < 1000){
            this.limite = quantidade;
            console.log(`Agora seu limite é: ${this.limite}`);
        }else{
            console.log(`Infelizmente seu Limite foi REPROVADO`);
        }
    }
    //METOD PROTECTED
    protected solicitarLimite(quantidade: number){
        return this.aumentarLimite(quantidade);
    }
    //METODO PUBLICO
    solicitarLimiteApp(estaAltenticado: boolean, quantidade: number): void | boolean{
        if(estaAltenticado){
            this.aumentarLimite(quantidade);
        }else{
            return false;
        }
    }
}

//Classe Filha
class bancoAfiliado extends Conta {
    limiteAfiliado(){
        return this.solicitarLimite(1500);
    }
}
const fulano = new Conta();

//fulano.limite; //não funciona
//fulano.aumentarLimite; //não funciona

fulano.solicitarLimiteApp(true, 700);//agora funciona, pois não esta acessando aumentarLimite diretamente
console.log(fulano)

const joao = new bancoAfiliado();
joao.limiteAfiliado();
console.log(joao);