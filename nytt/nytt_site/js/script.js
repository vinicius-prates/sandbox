const API_KEY = 'd2460721257142e6ab02f85d003e882d'
const PAIS = 'br'
const categoria = 'business'

const URL_REQUISICAO = `https://newsapi.org/v2/top-headlines?country=${PAIS}&category=${categoria}&apiKey=${API_KEY}`

let artigos = []
const container = document.querySelector('.container')

function gerarPagina(data){
    data.articles.forEach(article => {
        
        if (article.urlToImage && article.description){
            let divArtigo = document.createElement('div');
            divArtigo.innerHTML = `<div class="artigo_completo">
                                    <div class="imagem"> <img class="imagem_artigo" src="${article.urlToImage}"></img></div>
                                <div class="info"><h1 class="titulo_artigo">${article.title}</h1>
                                <p class="conteudo_artigo">${article.description}</p>
                                <a class="link_artigo" href="${article.url}" target="_blank">Matéria completa</a>
                                </div>
                                </div>`
            artigos.push(divArtigo);
        }
    }); 
    loopArtigos()
}

function loopArtigos(){
    container.appendChild(artigos[0]);
    let z = 1
    setInterval(() => {
        container.innerHTML = ""
        if (!artigos[z]){
            z = 0;
        }
        container.appendChild(artigos[z])
        z++;
    }, 5000)
}

fetch(URL_REQUISICAO)
    .then(res => {
        res.json()
            .then(data => {
                gerarPagina(data);
            })
            .catch(err => console.log(err));
    })
    .catch(err => console.log(err));

