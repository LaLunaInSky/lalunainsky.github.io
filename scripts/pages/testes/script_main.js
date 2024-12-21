"use strict"

let menuLateralAbertura = false
let opçõesMenuLateral = document.querySelector('.menuLateral>nav')
let imgMenuLateral = document.querySelector('.menuLateral>section>img')
let menuCentral = document.querySelector('.menuCentral')

function trueOrFalseMenuLateralAbertura() {
    if (menuLateralAbertura == false) {
        menuLateralAbertura = true
    } else {
        menuLateralAbertura = false
    }

    switch (menuLateralAbertura) {
        case true:
            opçõesMenuLateral.style.display = 'flex'
            imgMenuLateral.setAttribute('src', '../../imagens/menu_icones/close_icon_50px.png')
            break
        case false:
            opçõesMenuLateral.style.display = 'none'
            imgMenuLateral.setAttribute('src', '../../imagens/menu_icones/menu_icon_50px.png')
            break
    }
}

function funfou() {
    alert('funfou!')
}

menuCentral.addEventListener("animationiteration", funfou)