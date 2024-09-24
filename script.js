//javascript para carregar as últimas notícias

//endereço do xml
const xmlURL = 'https://folhadecianorte.com/sitemap-news.xml';

//função para buscar o xml
function buscarXML(){
    fetch(xmlURL)
    .then(response => response.text)
    .then(data => {
        //aqui vamos converter o texto em DOM
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "application/xml");
        
        ///agora vamos extrair os dados desejados(exemplo URL das notícias)
        let noticias = xml.getElementsByTagName("url");
        //elemento (no html) onde vou exibir as notícias
        let manchetesContainer = document.getElementById('manchetes');

        //percorrer as notícias usando um for (um laço de repetição)
        for (let i = 0; i < notícias.length; i++){
            let loc = noticias[i].getElementsByTagName("loc")[0].textContent;
            let data_publi = noticias[i].getElementsByTagName("news:publication_date")[0].textContent;
            let titulo = noticias[i].getElementsByTagName("news.title")[0].textContent;
            let manchetesHTMLclass = "<div class='noticias'>";
            let manchetesHTMLclassend = "</div><hr/>";
            let h21 = "<h2>";
            let h21end = "</h2>";
            let link1 = "<a href='";
            let linked = "'>leia mais</a>";
            let montadiv = manchetesHTMLclass+ h21+ $(titulo)+h21end+link1+$(loc)+linkend1+manchetesHTMLclassend; manchetesContainer.innerHTML +=montadiv;
        }
    }).catch(error => {console.error('erro ao carregar o xml', error);});

} 
window.onload = buscarXML;//atualiza ao carregar a pagina

                              