"use strict"

const organizaçãoMods = ()=>{
    let h2IDm1 = document.querySelector('#m1>h2')
    if (window.innerWidth >= 850) {
        let quantidadeDeMódulos = document.querySelector('.módulos')
        if (quantidadeDeMódulos.children.length < 2) {
            quantidadeDeMódulos.style.justifyContent = 'center'
            h2IDm1.style = 'margin-top: 0px;border-radius: 0px 0px 20px 20px;'
        } else {
            quantidadeDeMódulos.style.justifyContent = 'space-around'
            quantidadeDeMódulos.style.alignItems = 'flex-start'
            h2IDm1.style = 'margin-top: 20px;border-radius: 20px;'
        }
    } else {
        h2IDm1.style = 'margin-top: 0px;border-radius: 0px 0px 20px 20px;'
    }
}

window.onresize = ()=>{
    organizaçãoMods()
}

organizaçãoMods()