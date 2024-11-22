function aparecerSumirOpções(num) {
    let articleEstudos = document.querySelector('article.estudos')
    let
    
    if (num == 0) {
        if (articleEstudos.style.display != 'none') {
            articleEstudos.style.display = 'none'
        } else {
            articleEstudos.style.display = 'block'
        }
    }
}