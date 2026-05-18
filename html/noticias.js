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

    function exibir_noticias() {
    const section = document.getElementById('noticias');
    }

    var noticias = [
        {
            imagem: "Designer-UI.jpg",
            titulo: "técnicas de UI/UX pra desenvolvedores Júnior",
            descricao: "Assim mesmo, o consenso sobre a necessidade de qualificação auxilia a preparação e a composição dos relacionamentos verticais entre as hierarquias. Vale destacar que a gestão eficiente dos recursos estratégicos garante a contribuição de um grupo importante na determinação de todos os recursos funcionais envolvidos. Nunca é demais lembrar o peso e o significado destes problemas, uma vez que a hegemonia do ambiente político faz parte de um processo de gerenciamento das rupturas provocadas pela transformação digital. O que temos que ter sempre em mente é que a adoção de políticas descentralizadoras desafia a capacidade de equalização das posturas dos órgãos dirigentes com relação às suas atribuições. ",
            link: "../html/noticias.html"
        }
    ];
    
    var html = '';
    noticias.forEach(noticia) 
        html += `
        <article class="noticia">
            <img src="../img/Desginer-UI.jpg" onclick="abrir_lightbox(this)" alt="Designer UI" class="noticia3">
            <h2>Notícia 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur commodo. Sed at ligula a nunc efficitur commodo. Sed at ligula a nunc efficitur commodo.</p>
            <a href="#" class="btn">Ler mais</a>
        </article>
       .;
    }); 

    section.innerHTML = html;
}
        
