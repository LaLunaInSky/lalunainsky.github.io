var listaDeOpçõesMenu = ['Sobre', 'Repositórios', 'Projetos', 'Contato', 'Mídias Sociais']
var listaMensagens = ['Olá, Mundo!', 'Eu sou LaLunaInSky', 'Bem Vindo(a)!', 'LaLunaInSky']

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

    var contagem = 0
    while (contagem != listaMensagens.length) {
        h1Header.innerText = listaMensagens[contagem]
        h1Header.style.animation = `typing 2s steps(${listaMensagens[contagem].length}), cursor .6s step-end infinite alternate`;
        contagem++
        if (contagem == listaMensagens.length) {
            MenusOpções(menuHeader)  
        }
    }
}

incializaçãoSite()