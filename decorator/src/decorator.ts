// decorator é experimental
/* DECORATOR são uma funcionalidade que permite modificar ou adicionar comportamento:

    Class
    Propriedade
    Metodos
    Parametros (Pouco usado)
    Getters / Setters (Pouco usado)

de forma declarativa e limpa,

Como criar um decorator:
é por meio de uma funcao, que recebe nome e parametro por padrao e retorna algo
*/

//construindo nosso decorator:
function logInfo(target: any){
    //target vai receber o construtor da nossa classe
    console.log(target);

}
//utilizando como um decorator
@logInfo
class Sistema{

}

//exemplo 2

function logInfo2(mensagem:string){
    return (target2: any) => {
        console.log(`${mensagem}, ${target2}`)
    }
}
@logInfo2("Servidor está Rodando !!")
class Sistema2{
    
}