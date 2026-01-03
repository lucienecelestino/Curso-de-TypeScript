// com o type alias conseguimos criar tipos mais poderosos, com mais informacoes do que tipos primitivos


type Uuid = string | number | null;

function acessar(uuid: Uuid, nome: string){ // ao inves de ter que escrever sempre : uuid: string | number | null, definimos Uuid como um tipo
    console.log(`ID: ${uuid} = Bem vindo ${nome}`)
}

function logUsuario(uuid: Uuid){ // ao inves de ter que escrever sempre : uuid: string | number | null
    console.log(`Conta referente ao UUID: ${uuid}`)
}

acessar(123, "Luciene");
acessar("55", "lucas");

logUsuario(123);



type Moedas = "BRL" | "EUR" | "USD"

function comprarItem (moeda: Moedas){
    console.log("Comprando com a moeda: ",moeda)
}

comprarItem("USD");
