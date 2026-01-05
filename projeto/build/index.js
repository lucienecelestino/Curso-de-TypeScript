"use strict";
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var buttonSoma = document.getElementById("buttonSomar");
var buttonSubtrai = document.getElementById("buttonSubtrair");
var buttonMultiplica = document.getElementById("buttonMultiplicar");
var buttonDivide = document.getElementById("buttonDividir");
var buttonPotencia = document.getElementById("buttonPotencia");
var buttonTriangulo = document.getElementById("buttonTriangulo");
var P_resultado = document.getElementById("resultado");
//uma forma de utilizar a interface
function Somar(valor) {
    return valor.numero1 + valor.numero2;
}
buttonSoma.addEventListener('click', function () {
    var resultado = Somar({ numero1: Number(input1.value), numero2: Number(input2.value) }); //trasformando o textpo que vem do campo input para numero
    P_resultado.textContent = resultado.toString();
});
//outra forma de utilizar a interface
function Subtrair(_a) {
    var numero1 = _a.numero1, numero2 = _a.numero2;
    return numero1 - numero2;
}
buttonSubtrai.addEventListener('click', function () {
    var resultado = Subtrair({ numero1: Number(input1.value), numero2: Number(input2.value) });
    P_resultado.textContent = resultado.toString();
});
//Sem utilizar interface
function Multiplicar(numero1, numero2) {
    return numero1 * numero2;
}
buttonMultiplica.addEventListener('click', function () {
    var resultado = Multiplicar(Number(input1.value), Number(input2.value));
    P_resultado.textContent = resultado.toString();
});
function operacao(_a) {
    var tipo = _a.tipo, numero1 = _a.numero1, numero2 = _a.numero2;
    if (tipo === "DIVIDIR") {
        return numero1 / numero2;
    }
    else if (tipo === "POTENCIA") {
        return Math.pow(numero1, numero2);
    }
    else {
        return (numero1 * numero2) / 2;
    }
}
buttonDivide.addEventListener('click', function () {
    var resultado = operacao({
        tipo: "DIVIDIR",
        numero1: Number(input1.value),
        numero2: Number(input2.value)
    });
    P_resultado.textContent = resultado.toString();
});
buttonPotencia.addEventListener('click', function () {
    var resultado = operacao({
        tipo: "POTENCIA",
        numero1: Number(input1.value),
        numero2: Number(input2.value)
    });
    P_resultado.textContent = resultado.toString();
});
buttonTriangulo.addEventListener('click', function () {
    var resultado = operacao({
        tipo: "AREA DO TRIANGULO",
        numero1: Number(input1.value),
        numero2: Number(input2.value)
    });
    P_resultado.textContent = resultado.toString();
});
