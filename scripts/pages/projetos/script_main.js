"use strict"

let mostradorProjetoÚnico = document.querySelector('.mostradorProjeto')
let header = document.querySelector('header')
let footer = document.querySelector('footer')
let main = document.querySelector('main')
let mostradorProjetos = document.querySelector('.projetos')

function abrirProjeto(nomeProjeto) {
    let nomeDoProjeto = nomeProjeto
    let mostradorProjetoIframe = document.querySelector('.mostradorProjeto>iframe')

    mostradorProjetoIframe.setAttribute('src', `https://lalunainsky.github.io/${nomeDoProjeto}/`)
    mostradorProjetoÚnico.style.display = 'flex'
    mostradorProjetos.style.display = 'none'
    header.style.display = 'none'
    footer.style.display = 'none'

    main.style.margin = '0px auto'
    main.style.width = "100%"
}

function fecharMostradorProjeto() {
    mostradorProjetoÚnico.style.display = 'none'
    mostradorProjetos.style.display = 'block'
    header.style.display = 'flex'
    footer.style.display = 'block'
    main.style.margin = '15px auto'
    main.style.width = "90%"
}