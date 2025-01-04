"use strict"

let menuLateral = document.querySelector('.menuLateral')
let projetoMostrador = document.querySelector('.projetoMostrar')
let mainProjetos = document.querySelector('main')
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