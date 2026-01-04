"use strict";
//console.log("TESTANDO SCRIPT")
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var buttonSoma = document.getElementById("buttonSomar");
var buttonSubtrai = document.getElementById("buttonSubtrair");
var P_resultado = document.getElementById("resultado");
function Somar(numero1, numero2) {
    return numero1 + numero2;
}
buttonSoma.addEventListener('click', function () {
    var resultado = Somar(Number(input1.value), Number(input2.value)); //trasformando o textpo que vem do campo input para numero
    P_resultado.textContent = resultado.toString();
});
function Subtrair(numero1, numero2) {
    return numero1 - numero2;
}
buttonSubtrai.addEventListener('click', function () {
    var resultado = Subtrair(Number(input1.value), Number(input2.value));
    console.log(resultado);
});
