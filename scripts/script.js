function aparecerSumirOpções(num) {
    
    if (num == 0) {
        let articleEstudos = document.querySelector('article.estudos')

        if (articleEstudos.style.display != 'none') {
            articleEstudos.style.display = 'none'
        } else {
            articleEstudos.style.display = 'block'
        }
    }
}