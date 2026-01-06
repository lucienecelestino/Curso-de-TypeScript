let listElement = document.querySelector("#app ul") as HTMLUListElement;
let inputElement = document.querySelector("#app input") as HTMLInputElement;
let buttonElement = document.querySelector("#app button") as HTMLElement;

let listaTarefas: string[] = [];

function adicionarTarefa(){
    if(inputElement.value === ""){
        alert("Digite uma tarefa, para que ela seja Adicionada a Lista !!")
        return false
    }else{

        let tarefaDigitada: string = inputElement.value;
        //colocando dentro da nossa array de tarefas
        listaTarefas.push(tarefaDigitada);

        //com a tarefa adcionada o campo volta a ficar vazio
        inputElement.value = "";

        salvarDados();
       
    }
}

buttonElement.onclick = adicionarTarefa

//Salvando no LocalStorage, ou seja salvando os dados Permanentemente
function salvarDados(){
    //JSON.stringify -> Vai transformar nosso array de string em string apenas, pois é isso que o localStorage aceita
    localStorage.setItem("@listagem_tarefas", JSON.stringify(listaTarefas))
}