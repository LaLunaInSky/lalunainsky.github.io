
function aparecimentoSections() {

    var sec = document.getElementById('primeiro')
    sec.style.visibility = 'visible';
    
    function passoDois() {
        sec.style.visibility = 'hidden';
        sec = document.getElementById('segundo')
        sec.style.visibility = 'visible';
    }

    function passoTres() {
        sec.style.visibility = 'hidden';
        sec = document.getElementById('terceiro')
        sec.style.visibility = 'visible';
    }

    function passoQuatro() {
        sec.style.visibility = 'hidden';
        sec = document.getElementById('quarto')
        //var nav = document.querySelector('nav')
        sec.style.visibility = 'visible';
        //nav.style.visibility = 'hidden';
    }

    passoQuatro()

}

function mudançaHeader() {
    let cssStyle = document.getElementById('styleCss').href
    let link = 'http://127.0.0.1:3000/style_index.css' // ficar de olho nesse link quando for colocar no main!

    if (cssStyle == link) {
        cssStyle = document.getElementById('styleCss').href = './style_index_alternativo.css';
        document.getElementById('quartoH1').innerHTML = `<a href="#" target="_self" onclick="mudançaHeader()">LaLunaInSky</a>`
    } else {
        cssStyle = document.getElementById('styleCss').href = './style_index.css';
        document.getElementById('quartoH1').innerHTML = `LaLunaInSky`
    }
}

aparecimentoSections()