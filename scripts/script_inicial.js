var listaDeOpçõesMenu = ['Sobre', 'Repositórios', 'Projetos', 'Contato', 'Mídias Sociais']

function MenusOpções(menu) {
    var quantidadeDeLinksDoMenu = listaDeOpçõesMenu.length

    for (var count = 0; count < quantidadeDeLinksDoMenu; count++) {
        var link = document.createElement('a')
        link.setAttribute('href', '#')
        link.setAttribute('target', '_self')
        link.innerText = `${listaDeOpçõesMenu[count]}`
        menu.appendChild(link)
    }
}

function incializaçãoSite() {
    var headerSection = document.querySelector('section#secHeader')
    var h1Header = document.createElement('h1')
    headerSection.appendChild(h1Header)
    var menuHeader = document.createElement('nav')
    headerSection.appendChild(menuHeader)

    //primeira frase
    h1Header.innerText = 'Olá, Mundo!'
    h1Header.style.animation = "typing 2s steps(11), cursor .6s step-end infinite alternate";
    clearInterval(meusIntervalos)
    meusIntervalos = setInterval(passoDois, 5000)

    //segunda frase
    h1Header.innerText = 'Eu sou LaLunaInSky'
    //h1Header.style.animation = "typing 2s steps(18), cursor .6s step-end infinite alternate";
    clearInterval(meusIntervalos)

    //terceira frase
    h1Header.innerText = 'Bem Vindo(a)!'
    //h1Header.style.animation = "typing 2s steps(13), cursor .6s step-end infinite alternate";
    clearInterval(meusIntervalos)

    //titulo + menu
    h1Header.innerText = 'LaLunaInSky'
    h1Header.style.animation = "typing 2s steps(11), cursor .6s step-end infinite alternate";

    MenusOpções(menuHeader)
    
    clearInterval(meusIntervalos)    
}

incializaçãoSite()