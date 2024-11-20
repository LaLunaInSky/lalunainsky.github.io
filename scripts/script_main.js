let teste = document.querySelector('span#testes')
let exercícosTotal = 1
let desafiosTotal = 1
let articleHC = document.querySelector('article.htmlCss')

function criaçãoDeMódulo(númeroDoMódulo, quantidadeDeDesafios=0, quantidadeDeExercícios=0) {
    let quantidadeDeDesafiosFinal = desafiosTotal + quantidadeDeDesafios
    let quantidadeDeExercícosFinal = exercícosTotal + quantidadeDeExercícios

    let sectionMain = document.createElement('section')
    sectionMain.setAttribute('class', 'modulos')
    sectionMain.setAttribute('id', `mod${númeroDoMódulo}`)
    sectionMain.innerHTML = `<h3>Módulo ${númeroDoMódulo}</h3>`
    articleHC.appendChild(sectionMain)    

    if (quantidadeDeDesafios != 0) {
        let secDf = document.createElement('section')
        secDf.setAttribute('class', `mod${númeroDoMódulo}Df`)
        secDf.innerHTML = `<h4 onclick="mostrarOpções(0, ${númeroDoMódulo})">Desafios</h4>`

        let ulDf = document.createElement('ul')
        ulDf.setAttribute('class', `mod${númeroDoMódulo}Df`)
        secDf.appendChild(ulDf)
        sectionMain.appendChild(secDf)

        for (desafiosTotal ;desafiosTotal != quantidadeDeDesafiosFinal; desafiosTotal += 1) {
            let liResultado = document.createElement('li')
            if (desafiosTotal <= 9) {
                liResultado.innerHTML = `<a href="https://lalunainsky.github.io/Estudos_HTML_e_CSS/Estudos_Iniciais_Com_o_Curso_Em_Vídeo/M%C3%B3dulo_${númeroDoMódulo}/Desafios/d_00${desafiosTotal}/" target="_blank">d_00${desafiosTotal}</a>`
                ulDf.appendChild(liResultado)
            } else if (desafiosTotal <= 99) {
                liResultado.innerHTML = `<a href="https://lalunainsky.github.io/Estudos_HTML_e_CSS/Estudos_Iniciais_Com_o_Curso_Em_Vídeo/M%C3%B3dulo_${númeroDoMódulo}/Desafios/d_0${desafiosTotal}/" target="_blank">d_0${desafiosTotal}</a>`
                ulDf.appendChild(liResultado)
            } else {
                liResultado.innerHTML = `<a href="https://lalunainsky.github.io/Estudos_HTML_e_CSS/Estudos_Iniciais_Com_o_Curso_Em_Vídeo/M%C3%B3dulo_${númeroDoMódulo}/Desafios/d_${desafiosTotal}/" target="_blank">d_${desafiosTotal}</a>`
                ulDf.appendChild(liResultado)
            }
        }
    }

    if (quantidadeDeExercícios != 0) {
        let secEx = document.createElement('section')
        secEx.setAttribute('class', `mod${númeroDoMódulo}Ex`)
        secEx.innerHTML = `<h4 onclick="mostrarOpções(1, ${númeroDoMódulo})">Exercícios</h4>`

        let ulEx = document.createElement('ul')
        ulEx.setAttribute('class', `mod${númeroDoMódulo}Ex`)
        secEx.appendChild(ulEx)
        sectionMain.appendChild(secEx)

        for (exercícosTotal ;exercícosTotal != quantidadeDeExercícosFinal; exercícosTotal += 1) {
            let liResultado = document.createElement('li')
            if (exercícosTotal <= 9) {
                liResultado.innerHTML = `<a href="https://lalunainsky.github.io/Estudos_HTML_e_CSS/Estudos_Iniciais_Com_o_Curso_Em_Vídeo/M%C3%B3dulo_${númeroDoMódulo}/Exercícios/ex_00${exercícosTotal}/" target="_blank">ex_00${exercícosTotal}</a>`
                ulEx.appendChild(liResultado)
            } else if (exercícosTotal <= 99) { 
                liResultado.innerHTML = `<a href="https://lalunainsky.github.io/Estudos_HTML_e_CSS/Estudos_Iniciais_Com_o_Curso_Em_Vídeo/M%C3%B3dulo_${númeroDoMódulo}/Exercícios/ex_0${exercícosTotal}/" target="_blank">ex_0${exercícosTotal}</a>`
                ulEx.appendChild(liResultado)
            } else {
                liResultado.innerHTML = `<a href="https://lalunainsky.github.io/Estudos_HTML_e_CSS/Estudos_Iniciais_Com_o_Curso_Em_Vídeo/M%C3%B3dulo_${númeroDoMódulo}/Exercícios/ex_${exercícosTotal}/" target="_blank">ex_${exercícosTotal}</a>`
                ulEx.appendChild(liResultado)
            }
        }
    }
}

function esconderTodasOpções() {
    let quantidadeDeMódulos = Number(articleHC.children.length) - 1
    for (let c=1;c<=quantidadeDeMódulos;c++) {
        let ulEx = document.querySelector(`ul.mod${c}Ex`)
        let ulDf = document.querySelector(`ul.mod${c}Df`)

        ulDf.style.display = 'none'
        ulEx.style.display = 'none'
    }
}

function mostrarOpções(numOpção, módulo) {
    let ulExMain = document.querySelector(`ul.mod${módulo}Ex`)
    let ulDfMain = document.querySelector(`ul.mod${módulo}Df`)

    switch (numOpção) {
        case 0:
            if (ulDfMain.style.display == 'block') {
                ulDfMain.style.display = 'none'
            } else {
                esconderTodasOpções()
                ulDfMain.style.display = 'block'
            }
            break

        case 1:
            if (ulExMain.style.display == 'block') {
                ulExMain.style.display = 'none'
            } else {
                esconderTodasOpções()
                ulExMain.style.display = 'block'
            }
            break
    }

}

criaçãoDeMódulo(1, 9, 22)
criaçãoDeMódulo(2, 1, 14)
criaçãoDeMódulo(3, 5, 15)
criaçãoDeMódulo(4, 1, 21)