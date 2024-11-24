function alteraçãoDarkLightMode(num=1) {
    let root = document.querySelector(':root')

    switch (num) {
        case 0:
            //black
            root.style.setProperty('--pretoBranco', '0')
            root.style.setProperty('--darkLight', 'black')
            break
        case 1:
            //white
            root.style.setProperty('--pretoBranco', '1')
            root.style.setProperty('--darkLight', 'white')
            break
    }
}

alteraçãoDarkLightMode(0)