function MenusOpções(menu) {
    var listaDeOpçõesMenu = ['Sobre', 'Repositórios', 'Projetos', 'Contato']

    var quantidadeDeLinksDoMenu = listaDeOpçõesMenu.length

    for (var count = 0; count < quantidadeDeLinksDoMenu; count++) {
        var link = document.createElement('a')
        if (count == 1) {
            link.setAttribute('href', '#')
        } else {
            link.setAttribute('href', '#')
        }
        link.setAttribute('target', '_self')
        link.innerText = `${listaDeOpçõesMenu[count]}`
        menu.appendChild(link)
    }
}

function incializaçãoHeader() {
    var contagem = 0
    var headerSection = document.querySelector('section#secHeader')
    var h1Header = document.createElement('h1')
    h1Header.innerHTML =`<a href="../../index.html" target="_self">LaLunaInSky</a>`
    headerSection.appendChild(h1Header)
    var menuHeader = document.createElement('nav')
    headerSection.appendChild(menuHeader)
    MenusOpções(menuHeader)
}

incializaçãoHeader()