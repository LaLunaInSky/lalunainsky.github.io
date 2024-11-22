function aparecerSumirOpções(num) {
    let articleEstudos = document.querySelector('article.estudos')
    let articleProjetos = document.querySelector('article.projetos')
    
    switch (num) {
        case 0:    
            if (articleEstudos.style.display != 'none') {
                articleEstudos.style.display = 'none'
            } else {
                articleEstudos.style.display = 'block'
            }
            break
        case 1:
            if (articleProjetos.style.display != 'none') {
                articleProjetos.style.display = 'none'
            } else {
                articleProjetos.style.display = 'block'
            }
            break
    }
}