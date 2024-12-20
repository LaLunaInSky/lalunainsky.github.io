"use strict"

let body = document.querySelector('body')

function criaçãoHeader() {
    let firstChildBody = document.querySelector('main')
    let header = document.createElement('header')
    let p = document.createElement('p')
    p.innerHTML = "<h1><a href='../../index.html'>LaLunaInSky</a></h1>"
    let nav = document.createElement('nav')
    let firstTitleh1 = document.querySelector('main>section>h1').innerText
    
    if (firstTitleh1 == 'Estudos') {
        nav.innerHTML = '<a href="index.html" target="_self">Início</a><a href="pages/projetos/index.html" target="_self">Projetos</a>'
    } else if (firstTitleh1 == 'Projetos') {
        nav.innerHTML = '<a href="../../index.html" target="_self">Início</a><a href="index.html" target="_self">Projetos</a>'
    }

    header.appendChild(p)
    header.appendChild(nav)

    let styleHeader = document.createElement('style')
    styleHeader.innerHTML = `
    * {
        margin: 0px;
        padding: 0px;
    }
    
    html, body {
        font-family: Arial, Helvetica, sans-serif;
    }

    header {
        display: block;
        text-align: center;
        font-size: 1.3em;
        border-radius: 0px 0px 60px 60px;
        background-color: #2498f0;
        box-shadow: 0px 4px 5px 3px rgba(0, 0, 0, 0.200), inset -1px 3px 10px 3px rgba(0, 0, 0, 0.120);
        padding: 10px;
        transition: border-radius 500ms;
        transition-timing-function: ease;
    }

    header > nav {
        margin: 15px 0px 5px;
    }

    header > nav > a{
        padding: 15px;
    }
        
    header a{
        text-decoration: none;
        text-shadow: 2px 3px 4px #2457f0;
        color: white;
    }`

    document.head.appendChild(styleHeader)
    body.insertBefore(header, body.childNodes[0])
}

function criaçãoFooter() {
    let footer = document.createElement('footer')
    let p1 = document.createElement('p')

    let aInstragram = document.createElement('a')
    aInstragram.setAttribute('href', 'https://www.instagram.com/lalunainsky/')
    aInstragram.setAttribute('target', '_blank')
    let imgInstagram = document.createElement('img')
    imgInstagram.setAttribute('src', '../../imagens/logos_midias_sociais/instagram_64px.png')
    imgInstagram.setAttribute('alt', 'logo instragram')
    aInstragram.appendChild(imgInstagram)
    p1.appendChild(aInstragram)

    let aGithub = document.createElement('a')
    aGithub.setAttribute('href', 'https://github.com/LaLunaInSky')
    aGithub.setAttribute('target', '_blank')
    let imgGithub = document.createElement('img')
    imgGithub.setAttribute('src', '../../imagens/logos_midias_sociais/github_64px.png')
    imgGithub.setAttribute('alt', 'logo github')
    aGithub.appendChild(imgGithub)
    p1.appendChild(aGithub)

    let aLinkedin = document.createElement('a')
    aLinkedin.setAttribute('href', 'https://www.linkedin.com/in/lalunainsky/')
    aLinkedin.setAttribute('target', '_blank')
    let imgLinkedin = document.createElement('img')
    imgLinkedin.setAttribute('src', '../../imagens/logos_midias_sociais/linkedin_64px.png')
    imgLinkedin.setAttribute('alt', 'logo linkedin')
    aLinkedin.appendChild(imgLinkedin)
    p1.appendChild(aLinkedin)

    let p2 = document.createElement('p')
    p2.innerText = '2024 - LaLunaInSky'

    footer.appendChild(p1)
    footer.appendChild(p2)

    let styleFooter = document.createElement('style')
    styleFooter.innerHTML = `
    * {
        margin: 0px;
        padding: 0px;
    }
    
    html, body {
        font-family: Arial, Helvetica, sans-serif;
    }

    footer {
        cursor: default;
        font-size: 1.2em;
        padding: 10px;
        text-align: center;
        border-radius: 60px 60px 0px 0px;
        color: white;
        background-color: #2457f0;
        box-shadow: inset 0px 4px 10px 5px rgba(0, 0, 0, 0.13);
    }

    footer > p:nth-child(1) img {
        filter: invert();
        transform: scale(60%);
    }

    footer > p:nth-child(1) > a:nth-child(2) > img {
        margin: 0px 5px;
    }`

    document.head.appendChild(styleFooter)
    body.appendChild(footer)
}

criaçãoHeader()
criaçãoFooter()