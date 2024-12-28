"use strict"

let projetoSelecionado = (projeto) => {
    let projetoAtual = document.querySelector(`#${projeto}  p:nth-child(1)`)
    projetoAtual.innerHTML = 'funfou'
}