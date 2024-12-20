"use strict"

let body = document.querySelector('body')

function criaçãoHeader() {
    let firstChildBody = document.querySelector('main')
    let header = document.createElement('header')
    let p = document.createElement('p')
    p.innerHTML = "<h1>LaLunaInSky</h1>"
    header.appendChild(p)

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
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        align-items: center;

        cursor: default;
        font-size: 1.3em;
        height: 80px;
        text-shadow: 2px 3px 4px #2457f0;
        border-radius: 0px 0px 60px 60px;
        color: white;
        background-color: #2498f0;
        box-shadow: 0px 4px 5px 3px rgba(0, 0, 0, 0.200), inset -1px 3px 10px 3px rgba(0, 0, 0, 0.120);
        
        transition: border-radius 500ms;
        transition-timing-function: ease;
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
    imgInstagram.setAttribute('src', '../imagens/logos_midias_sociais/instagram_64px.png')
    imgInstagram.setAttribute('alt', 'logo instragram')
    aInstragram.appendChild(imgInstagram)
    p1.appendChild(aInstragram)

    let aGithub = document.createElement('a')
    aGithub.setAttribute('href', 'https://github.com/LaLunaInSky')
    aGithub.setAttribute('target', '_blank')
    let imgGithub = document.createElement('img')
    imgGithub.setAttribute('src', '../imagens/logos_midias_sociais/github_64px.png')
    imgGithub.setAttribute('alt', 'logo github')
    aGithub.appendChild(imgGithub)
    p1.appendChild(aGithub)

    let aLinkedin = document.createElement('a')
    aLinkedin.setAttribute('href', 'https://www.linkedin.com/in/lalunainsky/')
    aLinkedin.setAttribute('target', '_blank')
    let imgLinkedin = document.createElement('img')
    imgLinkedin.setAttribute('src', '../imagens/logos_midias_sociais/linkedin_64px.png')
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