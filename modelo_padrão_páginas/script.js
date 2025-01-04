/*Criação dos HTMLS*/
let headPáginaTítulo = document.querySelector('head>title')

if (headPáginaTítulo.innerText != 'Modelo Padrão Páginas') {
    /*verificar qual página atual*/
    var prefixoComplementar = ''
    let localizaçãoPáginas = []
    switch (headPáginaTítulo.innerText){
        /*Adicionar as páginas existentes no site*/
        case 'LaLunaInSky':
            prefixoComplementar = './'
            localizaçãoPáginas = ['./index.html', './pages/projetos/index.html', './pages/contato/index.html']
            break
        case 'LaLunaInSky | Contato':
            prefixoComplementar = '../../'
            localizaçãoPáginas = ['../../index.html', '../projetos/index.html', './index.html']
            break
    }
    
    let head = document.querySelector('head')
    let body = document.querySelector('body')

    /*Criando os itens nescessários do head*/
    let linkToHead = document.createElement('link')
    linkToHead.setAttribute('rel', 'stylesheet')
    linkToHead.setAttribute('href', `${prefixoComplementar}modelo_padrão_páginas/style.css`)
    linkToHead.setAttribute('media', 'all')
    head.appendChild(linkToHead)

    /*Criando os itens no body*/
    body.innerHTML =`<header><h1>LaLunaInSky</h1><nav class="menuCentral"><a href="${localizaçãoPáginas[0]}">Início</a><a href="${localizaçãoPáginas[1]}">Projetos</a><a href="${localizaçãoPáginas[2]}">Contato</a></nav><section class="redesSociaisHeader"><a href="https://www.instagram.com/lalunainsky/" target="_blank"><img src="${prefixoComplementar}imagens/logos_midias_sociais/instagram_64px.png" alt="icone instagram"></a><a href="https://github.com/LaLunaInSky" target="_blank"><img src="${prefixoComplementar}imagens/logos_midias_sociais/github_64px.png" alt="icone github"></a><a href="https://www.linkedin.com/in/lalunainsky/" target="_blank"><img src="${prefixoComplementar}imagens/logos_midias_sociais/linkedin_64px.png" alt="icone linkedin"></a></section></header>`
    body.innerHTML += '<main><section class="espaçoVazio"></section></main>'
    body.innerHTML += '<footer><p>LaLunaInSky</p></footer>'
    body.innerHTML += `<aside class="menuLateral"><section onclick="trueOrFalseMenuLateralAbertura()"><img src="${prefixoComplementar}imagens/menu_icones/menu_icon_50px.png" alt="icone menu lateral"></section><nav><a href="${localizaçãoPáginas[0]}">Início</a><a href="${localizaçãoPáginas[1]}">Projetos</a><a href="${localizaçãoPáginas[2]}">Contato</a></nav><section class="redesSociaisMenuLateral"><a href="https://www.instagram.com/lalunainsky/" target="_blank"><img src="${prefixoComplementar}imagens/logos_midias_sociais/instagram_64px.png" alt="icone instagram"></a><a href="https://github.com/LaLunaInSky" target="_blank"><img src="${prefixoComplementar}imagens/logos_midias_sociais/github_64px.png" alt="icone github"></a><a href="https://www.linkedin.com/in/lalunainsky/" target="_blank"><img src="${prefixoComplementar}imagens/logos_midias_sociais/linkedin_64px.png" alt="icone linkedin"></a></section></aside>`
}

/*Depois da criação dos HTMLS*/
let menuLateralAbertura = false
let menuLateral = document.querySelector('.menuLateral')
let menuCentral = document.querySelector('.menuCentral')
let navMenuLateral = document.querySelectorAll('.menuLateral>nav>a')
let redesSociaisMenuLateral = document.querySelectorAll('.redesSociaisMenuLateral a')
let imgMenuLateral = document.querySelector('.menuLateral>section>img')
let date = new Date()
let anoAtual = date.getFullYear()
let footer = document.querySelector('footer>p')

footer.innerText = `${anoAtual} - LaLunaInSky`

function trueOrFalseMenuLateralAbertura() {
    if (menuLateralAbertura == false) {
        menuLateralAbertura = true
    } else {
        menuLateralAbertura = false
    }

    switch (menuLateralAbertura) {
        case true:
            for (let item of redesSociaisMenuLateral) {
                item.style.display = 'block'
            }
            for (let item of navMenuLateral) {
                item.style.display = 'block'
            } 
            imgMenuLateral.setAttribute('src', `${prefixoComplementar}imagens/menu_icones/close_icon_50px.png`)
            menuLateral.style = 'width: 192px;height: 260px;'
            break
        case false:
            for (let item of redesSociaisMenuLateral) {
                item.style.display = 'none'
            }
            for (let item of navMenuLateral) {
                item.style.display = 'none'
            }
            imgMenuLateral.setAttribute('src', `${prefixoComplementar}imagens/menu_icones/menu_icon_50px.png`)
            menuLateral.style = 'width: 55px;height: 55px;'
            break
    }
}

window.onresize = function(event) {
    if (window.innerWidth >= 768) {
        for (let item of redesSociaisMenuLateral) {
            item.style.display = 'none'
        }
        for (let item of navMenuLateral) {
            item.style.display = 'none'
        }
        imgMenuLateral.setAttribute('src', `${prefixoComplementar}imagens/menu_icones/menu_icon_50px.png`)
        menuLateral.style = 'width: 55px;height: 55px;'
        menuLateralAbertura = false
    }
}