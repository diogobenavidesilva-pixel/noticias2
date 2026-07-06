let carrinho = [];

function adicionar(produto){

carrinho.push(produto);

mostrar();

}

function mostrar(){

let lista = document.getElementById("lista");

lista.innerHTML="";

for(let item of carrinho){

lista.innerHTML += `<li>${item}</li>`;

}

}