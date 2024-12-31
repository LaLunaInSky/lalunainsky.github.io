"use strict"

let menuLateralAbertura = false
let menuLateral = document.querySelector('.menuLateral')
let navMenuLateral = document.querySelectorAll('.menuLateral>nav>a')
let redesSociaisMenuLateral = document.querySelectorAll('.redesSociaisMenuLateral a')
let imgMenuLateral = document.querySelector('.menuLateral>section>img')
let date = new Date()
let anoAtual = date.getFullYear()
const projetoMostrador = document.querySelector('.projetoMostrar')
const mainProjetos = document.querySelector('main')
let footer = document.querySelector('footer>p')
footer.innerText = `${anoAtual} - LaLunaInSky`
let headerPágina = document.querySelector('header')
let footerPágina = document.querySelector('footer')

let mostradorProjeto = (nomeProjeto) => {
    let fechadorProjetoMostradorLinkAncora = document.querySelector('.fechadorProjetoMostrador > a')
    fechadorProjetoMostradorLinkAncora.setAttribute('href', `#${nomeProjeto}`)
    
    let iframe =  document.querySelector('iframe')
    iframe.setAttribute('src', `https://www.lalunainsky.com/projeto-${nomeProjeto}/`)

    let linkRepoProjeto = document.querySelector('.fechadorProjetoMostrador > p > a')
    linkRepoProjeto.setAttribute('href', `https://github.com/LaLunaInSky/projeto-${nomeProjeto}/`)

    projetoMostrador.style.display = 'flex'
    mainProjetos.style.display = 'none'
    headerPágina.style.display = 'none'
    footerPágina.style.display = 'none'
    menuLateral.style.display = 'none'
}

let fecharMostradorProjeto = () => {
    projetoMostrador.style.display = 'none'
    mainProjetos.style.display = 'block'
    headerPágina.style.display = 'flex'
    footerPágina.style.display = 'block'
    menuLateral.style.display = 'block'
}

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
            imgMenuLateral.setAttribute('src', '../../imagens/menu_icones/close_icon_50px.png')
            menuLateral.style = 'width: 192px;height: 260px;'
            break
        case false:
            for (let item of redesSociaisMenuLateral) {
                item.style.display = 'none'
            }
            for (let item of navMenuLateral) {
                item.style.display = 'none'
            }
            imgMenuLateral.setAttribute('src', '../../imagens/menu_icones/menu_icon_50px.png')
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
        imgMenuLateral.setAttribute('src', '../../imagens/menu_icones/menu_icon_50px.png')
        menuLateral.style = 'width: 55px;height: 55px;'
        menuLateralAbertura = false
    }
}