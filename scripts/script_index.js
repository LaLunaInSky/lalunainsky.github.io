function MenusOpções(menu) {
    var listaDeOpçõesMenu = ['Sobre', 'Repositórios', 'Projetos', 'Contato', 'Mídias Sociais']

    var quantidadeDeLinksDoMenu = listaDeOpçõesMenu.length

    for (var count = 0; count < quantidadeDeLinksDoMenu; count++) {
        var link = document.createElement('a')
        if (count == 1) {
            link.setAttribute('href', 'page_repositórios/repositórios.html')
        } else {
            link.setAttribute('href', '#')
        }
        link.setAttribute('target', '_self')
        link.innerText = `${listaDeOpçõesMenu[count]}`
        menu.appendChild(link)
    }
}

function incializaçãoSite() {
    var contagem = 0
    var headerSection = document.querySelector('section#secHeader')
    var h1Header = document.createElement('h1')
    h1Header.innerText ='LaLunaInSky'
    headerSection.appendChild(h1Header)
    var menuHeader = document.createElement('nav')
    headerSection.appendChild(menuHeader)
    menuHeader.style.animation = `typing 2s steps(${65}), cursor .6s step-end infinite alternate`;
    MenusOpções(menuHeader)

    function tirarBorda() {
        h1Header.style.borderRight = '0px';
        menuHeader.style.borderRight = '0px';
        clearInterval(intervalo)
    }
    
    var intervalo = setInterval(tirarBorda, 5000)
}

incializaçãoSite()