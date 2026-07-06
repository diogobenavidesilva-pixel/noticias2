function mostrarConceito(){

document.getElementById("texto").innerHTML =
"A destruição certificada garante que os dados armazenados em HDs, SSDs, celulares, servidores, fitas e outros dispositivos sejam eliminados permanentemente utilizando métodos físicos ou lógicos certificados.";

}

function emitir(){

let data = new Date();

document.getElementById("certificadoTexto").innerHTML =
"✔ Certificado emitido com sucesso em " +
data.toLocaleDateString() +
" às " +
data.toLocaleTimeString();

}