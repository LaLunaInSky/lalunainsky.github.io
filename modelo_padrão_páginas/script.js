/*Criação dos HTMLS*/
let headPáginaTítulo = document.querySelector('head>title')

if (headPáginaTítulo.innerText != 'Modelo Padrão Páginas') {
    /*verificar qual página atual*/
    var prefixoComplementar = ''
    let localizaçãoPáginas = []
    switch (headPáginaTítulo.innerText){
        /*Adicionar as páginas existentes no site*/
        case 'LaLunaInSky':
            prefixoComplementar = './'
            localizaçãoPáginas = ['./index.html', './pages/projetos/index.html']
            break
        case 'LaLunaInSky | Teste':
            prefixoComplementar = '../../'
            localizaçãoPáginas = ['#', '#']
            break
        case 'LaLunaInSky | Projetos':
            prefixoComplementar = '../../'
            localizaçãoPáginas = ['../../index.html', './index.html']
            break
    }
    
    let head = document.querySelector('head')
    let body = document.querySelector('body')

    /*Criando os itens nescessários do head*/
    let linkToHead = document.createElement('link')
    linkToHead.setAttribute('rel', 'stylesheet')
    linkToHead.setAttribute('href', `${prefixoComplementar}modelo_padrão_páginas/style_adaptivo.css`)
    linkToHead.setAttribute('media', 'all')
    head.appendChild(linkToHead)

    /*Criando os itens nescessários do body*/
    let headerPágina = document.createElement('header')
    headerPágina.innerHTML = `<h1>LaLunaInSky</h1><nav class="menuCentral"><a href="${localizaçãoPáginas[0]}">Início</a><a href="${localizaçãoPáginas[1]}">Projetos</a></nav><section class="redesSociaisHeader"><a href="https://www.instagram.com/lalunainsky/" target="_blank"><img src="${prefixoComplementar}imagens/logos_midias_sociais/instagram_64px.png" alt="icone instagram"></a><a href="https://github.com/LaLunaInSky" target="_blank"><img src="${prefixoComplementar}imagens/logos_midias_sociais/github_64px.png" alt="icone github"></a><a href="https://www.linkedin.com/in/lalunainsky/" target="_blank"><img src="${prefixoComplementar}imagens/logos_midias_sociais/linkedin_64px.png" alt="icone linkedin"></a></section>`
    body.prepend(headerPágina)

    let mainEspaçoExtra = document.createElement('section')
    let mainPágina = document.querySelector('main')
    mainEspaçoExtra.setAttribute('class', 'espaçoVazio')
    mainPágina.prepend(mainEspaçoExtra)

    let footerPágina = document.createElement('footer')
    footerPágina.innerHTML = '<p>LaLunaInSky</p>'
    mainPágina.after(footerPágina)

    let asideMenuLateral = document.createElement('aside')
    asideMenuLateral.setAttribute('class', 'menuLateral')
    asideMenuLateral.innerHTML = `<section onclick="trueOrFalseMenuLateralAbertura()"><img src="${prefixoComplementar}imagens/menu_icones/menu_icon_50px.png" alt="icone menu lateral"></section><nav><a href="${localizaçãoPáginas[0]}">Início</a><a href="${localizaçãoPáginas[1]}">Projetos</a></nav><section class="redesSociaisMenuLateral"><a href="https://www.instagram.com/lalunainsky/" target="_blank"><img src="${prefixoComplementar}imagens/logos_midias_sociais/instagram_64px.png" alt="icone instagram"></a><a href="https://github.com/LaLunaInSky" target="_blank"><img src="${prefixoComplementar}imagens/logos_midias_sociais/github_64px.png" alt="icone github"></a><a href="https://www.linkedin.com/in/lalunainsky/" target="_blank"><img src="${prefixoComplementar}imagens/logos_midias_sociais/linkedin_64px.png" alt="icone linkedin"></a></section>`
    footerPágina.after(asideMenuLateral)
}

/*Depois da criação dos HTMLS*/
let menuLateralAbertura = false
let menuLateral = document.querySelector('.menuLateral')
let menuCentral = document.querySelector('.menuCentral')
let navMenuLateral = document.querySelectorAll('.menuLateral>nav>a')
let redesSociaisMenuLateral = document.querySelectorAll('.redesSociaisMenuLateral a')
let imgMenuLateral = document.querySelector('.menuLateral>section>img')
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
            imgMenuLateral.setAttribute('src', `${prefixoComplementar}imagens/menu_icones/close_icon_50px.png`)
            
            if (window.innerWidth < 480) {
                menuLateral.style = 'width: 150px;height: 178px;'
            } else {
                menuLateral.style = 'width: 170px;height: 200px;'
            }

            break
        case false:
            for (let item of redesSociaisMenuLateral) {
                item.style.display = 'none'
            }
            for (let item of navMenuLateral) {
                item.style.display = 'none'
            }
            imgMenuLateral.setAttribute('src', `${prefixoComplementar}imagens/menu_icones/menu_icon_50px.png`)
            if (window.innerWidth < 480) {
                menuLateral.style = 'width: 45px;height: 45px;'
            } else {
                menuLateral.style = 'width: 55px;height: 55px;'
            }
            break
    }
}


/*Temporário!!!!!!!!!*/
/*temp projetos*/
let projetoMostrador = document.querySelector('.projetoMostrar')
let mainProjetos = document.querySelector('main')
let headerPágina = document.querySelector('header')
let footerPágina = document.querySelector('footer')

let mostradorProjeto = (nomeProjeto) => {
    let fechadorProjetoMostradorLinkAncora = document.querySelector('.fechadorProjetoMostrador > a')
    let mesProjeto = document.querySelector(`#${nomeProjeto}`).parentElement.previousElementSibling.id
    fechadorProjetoMostradorLinkAncora.setAttribute('href', `#${mesProjeto}`)

    let iframe =  document.querySelector('iframe')
    iframe.setAttribute('src', `https://www.lalunainsky.com/projeto-${nomeProjeto}/`)

    let linkRepoProjeto = document.querySelector('.fechadorProjetoMostrador > p > a')
    linkRepoProjeto.setAttribute('href', `https://github.com/LaLunaInSky/projeto-${nomeProjeto}/`)

    setTimeout(()=>{
        projetoMostrador.style.display = 'flex'
        mainProjetos.style.display = 'none'
        headerPágina.style.display = 'none'
        footerPágina.style.display = 'none'
        menuLateral.style.display = 'none'
    }, 500)
        
}

let fecharMostradorProjeto = () => {
    projetoMostrador.style.display = 'none'
    mainProjetos.style.display = 'block'
    headerPágina.style.display = 'flex'
    footerPágina.style.display = 'block'
    
    if (window.innerWidth < 768) {
        menuLateral.style.display = 'block'
    }
}


/*temp home*/
const mudarTamanhoFotoSobre = () => {
    let imgFotoSobre = document.querySelector('.sobre img')
    if (window.innerWidth >= 992) {
        imgFotoSobre.setAttribute('src', '../../imagens/foto_perfil/foto_lalunainsky_300px.jpg')
    } else {
        imgFotoSobre.setAttribute('src', '../../imagens/foto_perfil/foto_lalunainsky_200px.jpg')
    }
}

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
    if (window.innerWidth >= 768) {
        for (let item of redesSociaisMenuLateral) {
            item.style.display = 'none'
        }
        for (let item of navMenuLateral) {
            item.style.display = 'none'
        }
        imgMenuLateral.setAttribute('src', `${prefixoComplementar}imagens/menu_icones/menu_icon_50px.png`)
        if (window.innerWidth < 480) {
            menuLateral.style = 'width: 45px;height: 45px;'
        } else {
            menuLateral.style = 'width: 55px;height: 55px;'
        }
        menuLateralAbertura = false
    }

    organizaçãoMods()
    mudarTamanhoFotoSobre()
}

mudarTamanhoFotoSobre()
organizaçãoMods()
