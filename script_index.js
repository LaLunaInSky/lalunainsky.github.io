let cssStyle = document.getElementById('styleCss').href
let link = 'http://127.0.0.1:3000/style_index.css' // ficar de olho nesse link quando for colocar no main!
let linkSegundário = 'http://127.0.0.1:3000/style_index_alternativo.css'


function aparecimentoSections() {
    //temporário
    var sec = document.getElementById('quarto')
    sec.style.visibility = 'visible';

    /*var sec = document.getElementById('primeiro')
    sec.style.visibility = 'visible';
    
    function passoDois() {
        sec.style.visibility = 'hidden';
        sec = document.getElementById('segundo')
        sec.style.visibility = 'visible';
    }

    function passoTres() {
        sec.style.visibility = 'hidden';
        sec = document.getElementById('terceiro')
        sec.style.visibility = 'visible';
    }

    function passoQuatro() {
        sec.style.visibility = 'hidden';
        sec = document.getElementById('quarto')
        //var nav = document.querySelector('nav')
        sec.style.visibility = 'visible';
        //nav.style.visibility = 'hidden';
    }

    passoQuatro()*/

}

function mudançaCss() {
    cssStyle = document.getElementById('styleCss').href

    //criando o main e o footer
    var footer = document.createElement('footer')
    var main = document.createElement('main')
    var secFootter = document.createElement('section')
    var body = document.querySelector('body')


    if (cssStyle == link) {
        //evita criar dois mains
        if (body.children.length > 1) {
            body.removeChild(body.children[1])
        }

        //footer elementos
        secFootter.innerHTML = '<p id="midiaSociaisLogos"><a id="primeiroAFooter" href="https://www.instagram.com/lalunainsky/" target="_blank"><img src="logos_mídia_sociais/instagram_logo_50px.png" alt="logo_instagram"></a><a href="https://github.com/LaLunaInSky" target="_blank"><img src="logos_mídia_sociais/github_logo_70px.png " alt="logo_github"></a><a href="https://www.linkedin.com/in/lalunainsky/" target="_blank"><img src="logos_mídia_sociais/linkedin_logo_50px.png" alt="logo_linkedin"></a><a href="https://www.youtube.com/@LaLunaInSky" target="_blank"><img src="logos_mídia_sociais/youtube_logo_50px.png" alt="logo_youtube"></a></p>'
        secFootter.innerHTML += '<p id="segundoPFooter">Criado por LaLunaInSky em 2024</p>'

        footer.appendChild(secFootter)

        cssStyle = document.getElementById('styleCss').href = './style_index_alternativo.css';
        document.getElementById('quartoH1').innerHTML = `<a href="#" target="_self" onclick="mudançaCss()">LaLunaInSky</a>`

        //mudança links nav 
        document.getElementById('quartoNav').innerHTML = '<a id="navPrimeiro" href="pages/page_sobre/sobre.html" target="conteudoMain">Sobre</a><a href="pages/page_repositórios/repositórios.html" target="conteudoMain">Repositórios</a><a href="pages/page_projetos/projetos.html" target="conteudoMain">Projetos</a><a href="pages/page_contato/contato.html" target="conteudoMain">Contato</a>'
    
        //criação do iframe
        main.innerHTML = '<iframe src="pages/page_sobre/sobre.html" name="conteudoMain" id="conteudoMain" frameborder="0"></iframe>'

        //adicionando o main e o footer no body
        body.appendChild(main)
        body.appendChild(footer)
        
    } else{

        cssStyle = document.getElementById('styleCss').href = './style_index.css';
        document.getElementById('quartoH1').innerHTML = `LaLunaInSky`

        //retorno links iniciais nav 
        document.getElementById('quartoNav').innerHTML = '<a id="navPrimeiro" href="pages/page_sobre/sobre.html" target="conteudoMain" onclick="mudançaCss()">Sobre</a><a href="pages/page_repositórios/repositórios.html" target="conteudoMain" onclick="mudançaCss()">Repositórios</a><a href="pages/page_projetos/projetos.html" target="conteudoMain" onclick="mudançaCss()">Projetos</a><a href="pages/page_contato/contato.html" target="conteudoMain" onclick="mudançaCss()">Contato</a>'

        //removendo o main e o footer do body
        body.removeChild(body.children[2])
        body.removeChild(body.children[1])
    }
}

mudançaCss() //dev temp

aparecimentoSections()