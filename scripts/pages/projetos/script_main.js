"use strict"

let mostradorProjetoÚnico = document.querySelector('.mostradorProjeto')
let header = document.querySelector('header')
let footer = document.querySelector('footer')
let mostradorProjetos = document.querySelector('.projetos')
let style = document.createElement('style')

function abrirProjeto(nomeProjeto) {
    let nomeDoProjeto = nomeProjeto
    let mostradorProjetoIframe = document.querySelector('.mostradorProjeto>iframe')

    mostradorProjetoIframe.setAttribute('src', `https://lalunainsky.github.io/${nomeDoProjeto}/`)
    mostradorProjetoÚnico.style.display = 'flex'
    mostradorProjetos.style.display = 'none'
    header.style.display = 'none'
    footer.style.display = 'none'

    style.innerHTML = `
    main {
        margin: 0px auto;
        width: 100%;
    }

    @media screen and (min-width: 485px) {
        main {
            width: 100%;
            transition: width 500ms;
            transition-timing-function: ease;
        }
    }

    @media screen and (min-width: 768px) {
        main {
            width: 100%;
            transition: width 500ms;
            transition-timing-function: ease;
        }
    }`
}

function fecharMostradorProjeto() {
    mostradorProjetoÚnico.style.display = 'none'
    mostradorProjetos.style.display = 'block'
    header.style.display = 'flex'
    footer.style.display = 'block'
    
    style.innerHTML = `
    main {
        margin: 15px auto;
        width: 90%;
    }

    @media screen and (min-width: 485px) {
        main {
            width: 480px;
            transition: width 500ms;
            transition-timing-function: ease;
        }
    }

    @media screen and (min-width: 768px) {
        main {
            width: 620px;
            transition: width 500ms;
            transition-timing-function: ease;
        }
    }`
}

document.head.appendChild(style)