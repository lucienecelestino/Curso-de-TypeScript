"use strict";
var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");
var listaSalva = localStorage.getItem("@listagem_tarefas");
var listaTarefas = listaSalva !== null && JSON.parse(listaSalva) || []; //convertendo a string para array, e se estiver null, continua vazia
function listarTarefas() {
    listElement.innerHTML = "";
    //percorrendo a lista
    listaTarefas.map(function (item) {
        var toDoElement = document.createElement("li"); // criando li dinamicamente
        var tarefaText = document.createTextNode(item); //criando o texto no html
        //para excluir um item na lista
        var linkElement = document.createElement("a"); //"a" = ancora
        linkElement.setAttribute("href", "#"); //colocando um atributo de click nele
        var posicaoItem = listaTarefas.indexOf(item); //posicao da minha tarefa
        linkElement.setAttribute("onclick", "deletarTarefa(".concat(posicaoItem, ")")); // quando o link for clicado chamara uma funcao e passa a posicao(indice) dessa tarefa
        linkElement.setAttribute("style", "margin-left: 10px"); //arrumando oesapassamento do botao excluir
        var linkText = document.createTextNode("Excluir"); //texto do elemento "a"
        linkElement.appendChild(linkText); // colocando o texto excluir dentro da tag de "a"
        //mostrando na tela
        toDoElement.appendChild(tarefaText); //colocando dentro da li
        toDoElement.appendChild(linkElement); //colocando a aconca dentro da li
        listElement.appendChild(toDoElement); //colando a li, dentro da ul
    });
}
listarTarefas();
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
        listarTarefas();
        salvarDados();
    }
}
buttonElement.onclick = adicionarTarefa;
function deletarTarefa(posicaoItem) {
    listaTarefas.splice(posicaoItem, 1); //deletando exatemente da posicao que eu receber, do primeiro item
    listarTarefas();
    salvarDados();
}
//Salvando no LocalStorage, ou seja salvando os dados Permanentemente
function salvarDados() {
    //JSON.stringify -> Vai transformar nosso array de string em string apenas, pois é isso que o localStorage aceita
    localStorage.setItem("@listagem_tarefas", JSON.stringify(listaTarefas));
}
