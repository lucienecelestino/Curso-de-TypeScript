let listElement = document.querySelector("#app ul") as HTMLUListElement;
let inputElement = document.querySelector("#app input") as HTMLInputElement;
let buttonElement = document.querySelector("#app button") as HTMLElement;

let listaSalva: (string | null) = localStorage.getItem("@listagem_tarefas");
let listaTarefas: string[] = listaSalva !== null && JSON.parse(listaSalva) || []; //convertendo a string para array, e se estiver null, continua vazia

function listarTarefas(){
    listElement.innerHTML = "";
    //percorrendo a lista
    listaTarefas.map (item => {
        let toDoElement: HTMLElement = document.createElement("li");// criando li dinamicamente
        let tarefaText = document.createTextNode(item)//criando o texto no html

        //para excluir um item na lista
        let linkElement = document.createElement("a");//"a" = ancora
        linkElement.setAttribute("href", "#"); //colocando um atributo de click nele

        let posicaoItem =listaTarefas.indexOf(item); //posicao da minha tarefa


        linkElement.setAttribute("onclick", `deletarTarefa(${posicaoItem})`);// quando o link for clicado chamara uma funcao e passa a posicao(indice) dessa tarefa
        linkElement.setAttribute("style", "margin-left: 10px")//arrumando oesapassamento do botao excluir

        let linkText = document.createTextNode("Excluir"); //texto do elemento "a"
        linkElement.appendChild(linkText);// colocando o texto excluir dentro da tag de "a"

        //mostrando na tela
        toDoElement.appendChild(tarefaText);//colocando dentro da li
        toDoElement.appendChild(linkElement);//colocando a aconca dentro da li
        listElement.appendChild(toDoElement);//colando a li, dentro da ul
    })
}
listarTarefas();

function adicionarTarefa(){
    if(inputElement.value === ""){
        alert("Digite uma tarefa, para que ela seja Adicionada a Lista !!");
        return false
    }else{

        let tarefaDigitada: string = inputElement.value;
        //colocando dentro da nossa array de tarefas
        listaTarefas.push(tarefaDigitada);

        //com a tarefa adcionada o campo volta a ficar vazio
        inputElement.value = "";

        listarTarefas();
        salvarDados();
       
    }
}

buttonElement.onclick = adicionarTarefa

function deletarTarefa(posicaoItem: number){
    listaTarefas.splice(posicaoItem, 1); //deletando exatemente da posicao que eu receber, do primeiro item

    listarTarefas();
    salvarDados();
}

//Salvando no LocalStorage, ou seja salvando os dados Permanentemente
function salvarDados(){
    //JSON.stringify -> Vai transformar nosso array de string em string apenas, pois é isso que o localStorage aceita
    localStorage.setItem("@listagem_tarefas", JSON.stringify(listaTarefas))
}