//console.log("TESTANDO SCRIPT")

const input1 = document.getElementById('num1') as HTMLInputElement;
const input2 = document.getElementById('num2') as HTMLInputElement;

const buttonSoma = document.getElementById("buttonSomar") as HTMLInputElement;
const buttonSubtrai = document.getElementById("buttonSubtrair") as HTMLInputElement;

const P_resultado = document.getElementById("resultado") as HTMLInputElement;

function Somar(numero1: number,  numero2: number){
    return numero1 + numero2;
}

buttonSoma.addEventListener('click', function(){
    const resultado = Somar(Number(input1.value), Number(input2.value))//trasformando o textpo que vem do campo input para numero
    P_resultado.textContent = resultado.toString();

})

function Subtrair(numero1: number, numero2:number){
    return numero1 - numero2;
}

buttonSubtrai.addEventListener('click', function(){
    const resultado = Subtrair(Number(input1.value), Number(input2.value))
    console.log(resultado);
})