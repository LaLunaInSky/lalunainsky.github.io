function mostrarOpçõesDoMódulo(idMódulo) {
    if (idMódulo[0] == 'h' && idMódulo[1] == 'c') {
        let quantidadeDeMódulosSectionHC = document.querySelector('section#mM1').children.length

        if (window.getComputedStyle(document.querySelector(`#${idMódulo}`).children[1]).display == 'none') {
            for (let count=1; count<=quantidadeDeMódulosSectionHC; count++) {
                if (idMódulo[3] != count) {
                    let módulo = document.querySelector(`article#hcM${count}`)
                    módulo.style.display = "none"
                } else {
                    let styleMódulo = document.createElement('style')
                    styleMódulo.innerText = `
                    #mM1 {
                        height: auto;
                    }

                    #htmlCssEstudo > aside {
                        border-radius: 15px 18% 18% 15px;      
                    }

                    #${idMódulo} > h3 {
                        background-color: var(--cor05);
                        color: white;
                        font-size: 1.4em;
                        padding: 10px;
                        width: 350px;
                        height: auto;
                        box-shadow: none;
                        border-radius: 20px 20px 0px 0px;

                        transition: height 500ms, width 500ms, font-size 500ms;
                        transition-timing-function: ease;
                    }

                    #${idMódulo} > h4 {
                        cursor: default;
                        background-color: var(--cor02);
                        color: white;
                        font-size: 1.1em;
                        padding: 10px;
                        display: block;

                        transtion: font-size 500ms;
                        transition-timing-function: ease;
                    }

                    #${idMódulo} > ul {
                        padding: 10px;
                        columns: 3;
                        list-style-type: none;
                        background-color: white;
                        display: block;
                    }

                    #${idMódulo} > ul:nth-child(3) {
                        border-left: 10px solid var(--cor02);
                        border-right: 10px solid var(--cor02);
                    }

                    #${idMódulo} > ul:nth-last-child(1) {
                        border-left: 10px solid var(--cor02);
                        border-right: 10px solid var(--cor02);
                        border-bottom:10px solid var(--cor02);
                        border-radius: 0px 0px 20px 20px;
                    }

                    #${idMódulo} > ul > li { 
                        padding: 7px;
                    }

                    #${idMódulo} > ul > li > a {
                        color: var(--cor05);
                        font-size: 1.05em;
                        font-weight: bolder;
                        text-decoration: none;

                        transtion: font-size 500ms, background-color 500ms;
                        transition-timing-function: ease;
                    }

                    #${idMódulo} > ul > li > a:hover {
                        background-color: var(--cor04);
                        border-radius: 5px;
                        padding: 5px;

                        transition: background-color 500ms, padding 500ms;
                        transition-timing-function: ease;
                    }

                    #${idMódulo} > h3:hover {
                        background-color: var(--cor04);
                        color: var(--cor05);

                        transition: background-color 500ms, color 500ms;
                        transition-timing-function: ease;
                    }
                        
                    @media screen and (min-width: 768px) {
                        #${idMódulo} > h3 {
                            width: 460px;
                            font-size: 1.6em;
                                
                            transition: width 500ms, font-size 500ms;
                            transition-timing-function: ease;
                        }
                        
                        #${idMódulo} > h4 {
                            font-size: 1.3em;

                            transtion: font-size 500ms;
                            transition-timing-function: ease;
                        }

                        #${idMódulo} > ul > li > a {
                            font-size: 1.2em;

                            transtion: font-size 500ms;
                            transition-timing-function: ease;
                        }
                    }`
                    document.head.appendChild(styleMódulo)          
                }
            }
        } else {
            document.head.removeChild(document.head.lastChild)
            for (let count=1; count<=quantidadeDeMódulosSectionHC; count++) {
                if (idMódulo[3] != count) {
                    let módulo = document.querySelector(`article#hcM${count}`)
                    módulo.style.display = "block"
                }
            }
        }
    } else {
        let quantidadeDeMódulosSectionJs = document.querySelector('section#mM2').children.length
    }
}

let escolhaProjeto = 1
let sectionOpções = document.querySelector('section#quantidadeOpções')

function mostrarEsconderProjeto() {
    let link = document.querySelector('#conteudoProjetos>a')
    let quantidadeDeProjetos = document.querySelector('#conteudoProjetos>a>aside').children.length
    for (let count=1; count <= quantidadeDeProjetos ; count++) {
        let projetoAtual = document.querySelector(`#conteudoProjetos>a>aside>section:nth-child(${count})`)
        if (count == escolhaProjeto) {
            projetoAtual.style.display = 'block'
            link.setAttribute('href', `https://lalunainsky.github.io/projeto-${projetoAtual.innerText.slice(8).toLowerCase()}/`)
        } else {
            projetoAtual.style.display = 'none'
        }
        criaçãoMostradorQuantidadeOpções()
    }
}

function mudarProjetoMostrador(num) {
    switch (num) {
        case 0:
            if (escolhaProjeto != 1) {
                escolhaProjeto -= 1
            }
            break
        case 1:
            if (escolhaProjeto != 4) {
                escolhaProjeto += 1
            }
            break
    }

    mostrarEsconderProjeto()
}

function criaçãoMostradorQuantidadeOpções() {
    let pBolinha = document.createElement('p')
    sectionOpções.appendChild(pBolinha)
}

mostrarEsconderProjeto()