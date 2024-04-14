function carregar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var sentimento = prompt('O que você está sentindo?')
    msg.innerHTML = `sinto...`
    if(sentimento == 'alegria') {
        msg.innerHTML = `Estou me sentindo alegre!`
        imagem.src = 'alegria.png'
        document.body.style.background = '#B4DB51'
    }else if (sentimento == 'tristeza') {
        msg.innerHTML = 'Estou me sentindo atípico, sei lá...'
        imagem.src = 'tristeza.png'
        document.body.style.background = '#6C879A'
    } else if (sentimento == 'raiva') {
        msg.innerHTML = 'Estou com muita raiva!!!!'
        imagem.src = 'raiva.png'
        document.body.style.background = '#AD0202'
    }
}


