
//TypeAlias
type Connection = {
    ip: string;
    nome: string;
}
//usando o export na frente da funcao, permite que eu use essa mesma funcao em outro arquivo
export function connection(informacoes: Connection): boolean{
    console.log(`CONEXAO REALIZADA COM SUCESSO !!!`, informacoes.ip)
    return true;

}

export function statusConnection(): void{
    console.log("SERVIDOR FUNCIONANDO 100%");
}