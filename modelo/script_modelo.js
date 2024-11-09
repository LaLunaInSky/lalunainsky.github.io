function MenusOpções(menu) {
    var listaDeOpçõesMenu = ['Sobre', 'Repositórios', 'Projetos', 'Contato']

    var quantidadeDeLinksDoMenu = listaDeOpçõesMenu.length

    for (var count = 0; count < quantidadeDeLinksDoMenu; count++) {
        var link = document.createElement('a')
        //link.setAttribute('id', 'pageAtual') adicionar na página atual
        if (count == 0) {
            link.setAttribute('href', '../pages/page_sobre/sobre.html')
        } else if (count == 1) {
            link.setAttribute('href', '../pages/page_repositórios/repositórios.html')
        } else if (count == 2) {
            link.setAttribute('href', '../pages/page_projetos/projetos.html')
        } else if (count == 3) {
            link.setAttribute('href', '../pages/page_contato/contato.html')
        }
        link.setAttribute('target', '_self')
        link.innerText = `${listaDeOpçõesMenu[count]}`
        menu.appendChild(link)
    }
}

function incializaçãoHeader() {
    var headerSection = document.querySelector('section#secHeader')
    var h1Header = document.createElement('h1')
    h1Header.innerHTML =`<a href="../../index.html" target="_self">LaLunaInSky</a>`
    headerSection.appendChild(h1Header)
    var menuHeader = document.createElement('nav')
    headerSection.appendChild(menuHeader)
    MenusOpções(menuHeader)
}

incializaçãoHeader()