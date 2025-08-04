let listaAmigos = [];

// Adicionar amigos a lista
function adicionarAmigo() {

    // Verificar se nome é valido
    let nome = document.getElementById("amigo").value;
    if (nome === ''){
        alert ('Nome invalido!')
    }else{
        listaAmigos.push(nome);
        console.log(listaAmigos);
        document.getElementById("amigo").value="";
        exibirAmigos();
    }
}

//Exibir lista de amigos na tela
function exibirAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = listaAmigos[i];
    lista.appendChild(item);
    }
 
  }

  //sortear amigo
function sortearAmigo() {
    let ul = document.getElementById('resultado');
    ul.innerHTML = '';

    // Verificar se lista vazia
    if (listaAmigos.length === 0) {
        alert("Adicione nomes à lista");
    } else {
        let nomeEscolhido = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        limparLista();
        // Exibir o nome sorteado
        let li = document.createElement('li');
        li.textContent = nomeEscolhido;
        ul.appendChild(li);
    }
}
  // Limpar lista ao final do sorteio  
function limparLista() {
    listaAmigos = []; 
    document.getElementById("listaAmigos").innerHTML = ""; 
    document.getElementById("resultado").innerHTML = ""; 
}




  
    
   
   
  



