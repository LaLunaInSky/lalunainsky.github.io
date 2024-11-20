let teste = document.querySelector('span#testes')
let exercícosTotal = 1
let desafiosTotal = 1
let sectionModulos = document.querySelector('section.modulos')

function criaçãoDeMódulo(númeroDoMódulo, ) {

}

function mostrarOpções(numOpção, módulo) {
    let ulEx = document.querySelector(`ul.mod${módulo}Ex`)
    let ulDf = document.querySelector(`ul.mod${módulo}Df`)
    switch (numOpção) {
        case 0:
            if (ulDf.style.display == 'block') {
                ulDf.style.display = 'none'
            } else {
                ulDf.style.display = 'block'
                ulEx.style.display = 'none'
            }
            break

        case 1:
            if (ulEx.style.display == 'block') {
                ulEx.style.display = 'none'
            } else {
                ulDf.style.display = 'none'
                ulEx.style.display = 'block'
            }
            break
    }

}