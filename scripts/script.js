function aparecerSumirOpções() {
    let secHtmlCssEstudo = document.querySelector('section#htmlCssEstudo')

    if (secHtmlCssEstudo.style.display != 'none') {
        secHtmlCssEstudo.style.display = 'none'
    } else {
        secHtmlCssEstudo.style.display = 'block'
    }
}