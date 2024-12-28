"use strict"

const projetoMostrador = document.querySelector('.projetoMostrar')
const mainProjetos = document.querySelector('main')

let mostradorProjeto = (nomeProjeto) => {
    if (projetoMostrador.style.display = 'none') {
        projetoMostrador.style.display = 'flex'
        mainProjetos.style.display = 'none'
    }
}

let fecharMostradorProjeto = () => {
    if (projetoMostrador.style.display = 'flex') {
        projetoMostrador.style.display = 'none'
        mainProjetos.style.display = 'block'
    }
}