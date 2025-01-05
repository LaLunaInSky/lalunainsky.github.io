const mudarTamanhoFotoSobre = () => {
    let imgFotoSobre = document.querySelector('.sobre img')
    if (window.innerWidth >= 992) {
        imgFotoSobre.setAttribute('src', '../../imagens/foto_perfil/foto_lalunainsky_300px.jpg')
    } else {
        imgFotoSobre.setAttribute('src', '../../imagens/foto_perfil/foto_lalunainsky_200px.jpg')
    }
}

window.onresize = function(event) {
    mudarTamanhoFotoSobre()
}

mudarTamanhoFotoSobre()