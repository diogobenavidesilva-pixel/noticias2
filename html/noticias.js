function alterar_Tema() {
    var body = document.body;
    body.classList.toggle('escuro');

    } 


    if (body.classList.contains('escuro')) {
        body.classList. remove('claro');
        body.classList.add('escuro');
    
    }
    else {
        body.classList.remove('escuro');
        body.classList.add('claro');
    }
        
    function abrir_lightbox(element) {
        var lightbox = document.getElementById("lightbox");
        var lightbox_img = document.getElementById("lightbox-img");

        lightbox_img.src = element.src;
        lightbox.style.display = "flex";
    }
    
    function fechar_lightbox() {
        document.getElementById("lightbox").style.display = "none";
    }
