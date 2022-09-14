let listaTarefas = document.querySelector("[name=listaTarefas]") as HTMLUListElement;


let listaSalvas: (string | null) = localStorage.getItem("@listaTarefas");
let tarefaZ: string[] = listaSalvas !== null && JSON.parse(listaSalvas) || [];

function listarTarefas(){

    
    listaTarefas.innerHTML = "";
  
    tarefaZ.map( item => {
      let todoElement = document.createElement("li");
      let tarefaText = document.createTextNode(item);
  
      let linkElement = document.createElement("a");
      linkElement.setAttribute("href", "#");
  
      let posicao = tarefaZ.indexOf(item);
  
      linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`)
      linkElement.setAttribute("style", "margin-left: 10px")
      
      let linkText = document.createTextNode("Excluir");
      linkElement.appendChild(linkText);
  
      todoElement.appendChild(tarefaText);
      todoElement.appendChild(linkElement);
      listaTarefas.appendChild(todoElement);
  
    })
  
  } 

  function salvarDado(){
    console.log('salvando os dados');
    
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefaZ))
  }
  

  function deletarTarefa(posicao: number){
    tarefaZ.splice(posicao, 1);
  
    listarTarefas();
    salvarDado();
  
  }

  listarTarefas()