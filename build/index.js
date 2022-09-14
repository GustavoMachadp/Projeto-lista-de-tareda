"use strict";
var tarefaX = document.getElementById('tarefaX');
var tarefa1 = document.getElementById('tarefa1');
var tarefa2 = document.getElementById('tarefa2');
var tarefa3 = document.getElementById('tarefa3');
var tarefa4 = document.getElementById('tarefa4');
var botaoAdd = document.getElementById('botaoAdd');
var listaSalva = localStorage.getItem("@listaTarefas");
var tarefas = listaSalva !== null && JSON.parse(listaSalva) || [];
function adicionarTarefa() {
    if (tarefaX.value === "") {
        alert("Digite alguma tarefa!");
        return false;
    }
    else {
        var tarefaDigitada = tarefaX.value;
        tarefas.push(tarefaDigitada);
        if (tarefa1.value === "") {
        }
        else {
            var tarefaDigitada1 = tarefa1.value;
            tarefas.push(tarefaDigitada1);
        }
        if (tarefa2.value === "") {
        }
        else {
            var tarefaDigitada2 = tarefa2.value;
            tarefas.push(tarefaDigitada2);
        }
        if (tarefa3.value === "") {
        }
        else {
            var tarefaDigitada3 = tarefa3.value;
            tarefas.push(tarefaDigitada3);
        }
        if (tarefa4.value === "") {
        }
        else {
            var tarefaDigitada4 = tarefa4.value;
            tarefas.push(tarefaDigitada4);
        }
        tarefaX.value = "";
        tarefa1.value = "";
        tarefa2.value = "";
        tarefa3.value = "";
        tarefa4.value = "";
        console.log('passou aqui');
        // listarTarefas();
        salvarDados();
    }
}
botaoAdd.onclick = adicionarTarefa;
function salvarDados() {
    console.log('salvando os dados');
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas));
}
