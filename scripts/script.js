function alteraçãoDarkLightMode() {
    let root = document.querySelector(':root')
    let imgHeaderDarkLightMode = document.querySelector('img#darkLightModeImgem')
    let rootStyle = getComputedStyle(root)

    if (rootStyle.getPropertyValue('--pretoBranco') == 1 /*white*/) {
        root.style.setProperty('--pretoBranco', '0')
        root.style.setProperty('--darkLight', 'black')
        imgHeaderDarkLightMode.src = 'imagens/icones_dark_light_mode/moon_32px.png'
    } else {
        root.style.setProperty('--pretoBranco', '1')
        root.style.setProperty('--darkLight', 'white')
        imgHeaderDarkLightMode.src = 'imagens/icones_dark_light_mode/sun_32px.png'
    }
}