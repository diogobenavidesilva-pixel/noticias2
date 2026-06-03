// URL da API de notícias (exemplo utilizando GNews ou NewsAPI)
// Recomendado obter sua própria chave de API em: https://gnews.io ou https://newsapi.org
const API_KEY = 'SUA_API_KEY_AQUI'; 
const URL = `https://gnews.ioapi/v4/search?q=tecnologia&lang=pt&token=${API_KEY}`;

// Seleciona a div onde as notícias serão exibidas
const containerNoticias = document.getElementById('noticias-container');

// Função para buscar e renderizar as notícias
async function carregarNoticias() {
    try {
        const resposta = await fetch(URL);
        
        if (!resposta.ok) {
            throw new Error('Erro ao conectar com o servidor de notícias.');
        }

        const dados = await resposta.json();

        // Limpa o container antes de adicionar novas notícias
        containerNoticias.innerHTML = '';

        // Verifica se existem artigos
        if (dados.articles.length === 0) {
            containerNoticias.innerHTML = '<p>Nenhuma notícia encontrada no momento.</p>';
            return;
        }

        // Cria os elementos HTML para cada notícia
        dados.articles.forEach(noticia => {
            const articleElement = document.createElement('article');
            articleElement.classList.add('noticia-card');

            articleElement.innerHTML = `
                <img src="${noticia.image || 'placeholder.jpg'}" alt="${noticia.title}" class="noticia-imagem">
                <div class="noticia-conteudo">
                    <h2 class="noticia-titulo">${noticia.title}</h2>
                    <p class="noticia-descricao">${noticia.description}</p>
                    <span class="noticia-fonte">${noticia.source.name}</span>
                    <a href="${noticia.url}" target="_blank" class="noticia-link">Ler mais</a>
                </div>
            `;

            containerNoticias.appendChild(articleElement);
        });

    } catch (erro) {
        console.error('Erro:', erro);
        containerNoticias.innerHTML = '<p>Não foi possível carregar as notícias. Tente novamente mais tarde.</p>';
    }
}

// Executa a função quando a página for carregada
document.addEventListener('DOMContentLoaded', carregarNoticias);
