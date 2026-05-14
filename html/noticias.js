function alterar_Tema() {
    var body = document.body;
    body.classList.toggle('escuro');

    } 
     

    if (body.classList.contains('escuro')) {
        body.classList. remove('escuro');
        body.classList.add('claro');
    
    }
    else {
        body.classList.remove('claro');
        body.classList.add('escuro');
    }
    
