

const input1 = document.getElementById('num1') as HTMLInputElement;
const input2 = document.getElementById('num2') as HTMLInputElement;


const buttonSoma = document.getElementById("buttonSomar") as HTMLInputElement;
const buttonSubtrai = document.getElementById("buttonSubtrair") as HTMLInputElement;
const buttonMultiplica = document.getElementById("buttonMultiplicar") as HTMLInputElement;
const buttonDivide = document.getElementById("buttonDividir") as HTMLInputElement;
const buttonPotencia = document.getElementById("buttonPotencia") as HTMLInputElement;
const buttonTriangulo = document.getElementById("buttonTriangulo") as HTMLInputElement;

const P_resultado = document.getElementById("resultado") as HTMLInputElement;


interface Valores{
    numero1: number;
    numero2: number
}

//uma forma de utilizar a interface
function Somar(valor: Valores): number{
    return valor.numero1 + valor.numero2;
}

buttonSoma.addEventListener('click', function(){
    const resultado = Somar({numero1: Number(input1.value), numero2: Number(input2.value)})//trasformando o textpo que vem do campo input para numero
    P_resultado.textContent = resultado.toString();

})
//outra forma de utilizar a interface
function Subtrair({numero1, numero2}: Valores): number{
    return numero1 - numero2;
}

buttonSubtrai.addEventListener('click', function(){
    const resultado = Subtrair({numero1: Number(input1.value), numero2: Number(input2.value)})
    P_resultado.textContent = resultado.toString();
})

//Sem utilizar interface
function Multiplicar(numero1: number, numero2:number): number{
    return numero1 * numero2;
}

buttonMultiplica.addEventListener('click', function(){
    const resultado = Multiplicar(Number(input1.value), Number(input2.value))
    P_resultado.textContent = resultado.toString();
})


//USANDO TYPE ALIAS - não sendo mais necessario criar uma funcao para cada operacao
type Operacoes = "DIVIDIR" | "POTENCIA" | "AREA DO TRIANGULO";
interface Valores2{
    numero1: number;
    numero2: number;
    tipo: Operacoes;
}
function operacao({tipo, numero1, numero2}: Valores2):number{
    if(tipo === "DIVIDIR"){
        return numero1 / numero2;
    }else if(tipo === "POTENCIA"){
        return numero1 ** numero2;
    }else{
        return (numero1*numero2)/2
    }

}

buttonDivide.addEventListener('click', function(){
    const resultado = operacao({
        tipo: "DIVIDIR",
        numero1: Number(input1.value),
        numero2: Number(input2.value)})
    P_resultado.textContent = resultado.toString();
})


buttonPotencia.addEventListener('click', function(){
    const resultado = operacao({
        tipo: "POTENCIA",
        numero1: Number(input1.value),
        numero2: Number(input2.value)})
    P_resultado.textContent = resultado.toString();
})

buttonTriangulo.addEventListener('click', function(){
    const resultado = operacao({
        tipo: "AREA DO TRIANGULO",
        numero1: Number(input1.value),
        numero2: Number(input2.value)})
    P_resultado.textContent = resultado.toString();
})
