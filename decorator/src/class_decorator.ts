//Esse é um decorator factory — uma função que recebe parâmetros (no caso, o IP) e retorna o decorator
function setIpServidor(novoIp: string){
    return (target: any) => { // target é o construtor da nossa classe

        return class extends target{
            ip = novoIp;

        }

    }
}
@setIpServidor("192.168.50.50")
class Servidor{

}

//instanciando a classe
const servidor1 = new Servidor();
console.log(servidor1);