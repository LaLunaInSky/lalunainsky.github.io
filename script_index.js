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

aparecimentoSections()