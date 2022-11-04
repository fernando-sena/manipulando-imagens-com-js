function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12){
        img.src = 'imagens/manha1.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#905a58'
    } else if (hora >= 18 && hora <= 23){
        img.src = 'imagens/noite1.jpg'
        document.body.style.background = '#fe7763'
    }
}