"use strict"

let menuLateralAbertura = false
let navMenuLateral = document.querySelectorAll('.menuLateral>nav>a')
let redesSociaisMenuLateral = document.querySelectorAll('.redesSociaisMenuLateral a')
let imgMenuLateral = document.querySelector('.menuLateral>section>img')
let menuLateral = document.querySelector('.menuLateral>section')
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
            imgMenuLateral.setAttribute('src', './imagens/menu_icones/close_icon_50px.png')
            break
        case false:
            for (let item of redesSociaisMenuLateral) {
                item.style.display = 'none'
            }
            for (let item of navMenuLateral) {
                item.style.display = 'none'
            }
            imgMenuLateral.setAttribute('src', './imagens/menu_icones/menu_icon_50px.png')
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
        imgMenuLateral.setAttribute('src', './imagens/menu_icones/menu_icon_50px.png')
        menuLateralAbertura = false
    }
}