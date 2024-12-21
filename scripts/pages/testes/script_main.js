"use strict"

let menuLateralAbertura = false
let opçõesMenuLateral = document.querySelector('.menuLateral>nav')
let imgMenuLateral = document.querySelector('.menuLateral>section>img')

function trueOrFalseMenuLateralAbertura() {
    let menuLateral = document.querySelector('.menuLateral>section')

    if (menuLateralAbertura == false) {
        menuLateralAbertura = true
    } else {
        menuLateralAbertura = false
    }

    switch (menuLateralAbertura) {
        case true:
            opçõesMenuLateral.style.display = 'flex'
            imgMenuLateral.setAttribute('src', '../../imagens/menu_icones/close_icon_50px.png')
            menuLateral.style = `
                border-left: solid 2px var(--branco01);
                border-right: solid 2px var(--branco01);
                background-color: #2457f0;
                border-radius: 50% 50% 0% 0%;`
            break
        case false:
            opçõesMenuLateral.style.display = 'none'
            imgMenuLateral.setAttribute('src', '../../imagens/menu_icones/menu_icon_50px.png')
            menuLateral.style = `
                border-left: solid 0px var(--branco01);
                border-right: solid 0px var(--branco01);
                background-color: transparent;
                border-radius: 0% 0% 0% 0%;`
            break
    }
}

window.onresize = function(event) {
    if (window.innerWidth >= 768) {
        opçõesMenuLateral.style.display = 'none'
        imgMenuLateral.setAttribute('src', '../../imagens/menu_icones/menu_icon_50px.png')
        menuLateralAbertura = false
    }
}