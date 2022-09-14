const tarefaX = document.getElementById('tarefaX') as HTMLInputElement;
const tarefa1 = document.getElementById('tarefa1') as HTMLInputElement;
const tarefa2 = document.getElementById('tarefa2') as HTMLInputElement;
const tarefa3 = document.getElementById('tarefa3') as HTMLInputElement;
const tarefa4 = document.getElementById('tarefa4') as HTMLInputElement;



let botaoAdd = document.getElementById('botaoAdd') as HTMLElement;

let listaSalva: (string | null) = localStorage.getItem("@listaTarefas");
let tarefas: string[] = listaSalva !== null && JSON.parse(listaSalva) || [];







 function adicionarTarefa() {
    if(tarefaX.value === ""){
      alert("Digite alguma tarefa!")
      return false;
    }else{
  
      let tarefaDigitada: string = tarefaX.value;
      tarefas.push(tarefaDigitada);

      if(tarefa1.value === ""){
        
      }else{
          let tarefaDigitada1: string = tarefa1.value;
          tarefas.push(tarefaDigitada1);

      }

      if(tarefa2.value === ""){
      
      }else{
          let tarefaDigitada2: string = tarefa2.value;
          tarefas.push(tarefaDigitada2);

      }

      if(tarefa3.value === ""){
        
      }else{
          let tarefaDigitada3: string = tarefa3.value;
          tarefas.push(tarefaDigitada3);

      }

      if(tarefa4.value === ""){
        
      }else{
          let tarefaDigitada4: string = tarefa4.value;
          tarefas.push(tarefaDigitada4);

      }

      
      tarefaX.value = "";
      tarefa1.value = "";
      tarefa2.value = "";
      tarefa3.value = "";
      tarefa4.value = "";
      
      console.log('passou aqui');
      
     // listarTarefas();
      salvarDados()

      
  
    }

  }

  botaoAdd.onclick = adicionarTarefa

  function salvarDados(){
    console.log('salvando os dados');
    
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas))
  }

