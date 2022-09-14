"use strict";
var listaTarefas = document.querySelector("[name=listaTarefas]");
var listaSalvas = localStorage.getItem("@listaTarefas");
var tarefaZ = listaSalvas !== null && JSON.parse(listaSalvas) || [];
function listarTarefas() {
    listaTarefas.innerHTML = "";
    tarefaZ.map(function (item) {
        var todoElement = document.createElement("li");
        var tarefaText = document.createTextNode(item);
        var linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");
        var posicao = tarefaZ.indexOf(item);
        linkElement.setAttribute("onclick", "deletarTarefa(".concat(posicao, ")"));
        linkElement.setAttribute("style", "margin-left: 10px");
        var linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);
        todoElement.appendChild(tarefaText);
        todoElement.appendChild(linkElement);
        listaTarefas.appendChild(todoElement);
    });
}
function salvarDado() {
    console.log('salvando os dados');
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefaZ));
}
function deletarTarefa(posicao) {
    tarefaZ.splice(posicao, 1);
    listarTarefas();
    salvarDado();
}
listarTarefas();
