"use strict"

const projetoMostrador = document.querySelector('.projetoMostrar')
const mainProjetos = document.querySelector('main')

let mostradorProjeto = (nomeProjeto) => {
    let iframe =  document.querySelector('iframe')
    iframe.setAttribute('src', `https://www.lalunainsky.com/projeto-${nomeProjeto}/`)

    projetoMostrador.style.display = 'flex'
    mainProjetos.style.display = 'none'
}

let fecharMostradorProjeto = () => {
    projetoMostrador.style.display = 'none'
    mainProjetos.style.display = 'block'
}

/*<iframe src="https://www.lalunainsky.com/projeto-android/" frameborder="0"></iframe>*/