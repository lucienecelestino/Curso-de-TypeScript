"use strict";
var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");
var listaTarefas = [];
function adicionarTarefa() {
    if (inputElement.value === "") {
        alert("Digite uma tarefa, para que ela seja Adicionada a Lista !!");
        return false;
    }
    else {
        var tarefaDigitada = inputElement.value;
        //colocando dentro da nossa array de tarefas
        listaTarefas.push(tarefaDigitada);
        //com a tarefa adcionada o campo volta a ficar vazio
        inputElement.value = "";
        salvarDados();
    }
}
buttonElement.onclick = adicionarTarefa;
//Salvando no LocalStorage, ou seja salvando os dados Permanentemente
function salvarDados() {
    //JSON.stringify -> Vai transformar nosso array de string em string apenas, pois é isso que o localStorage aceita
    localStorage.setItem("@listagem_tarefas", JSON.stringify(listaTarefas));
}
