function carregar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são exatamente ${hora} horas. `
    if(hora >=0 && hora < 12) {
        imagem.src = 'manha.png'
        msg.innerHTML = `Agora  são exatamente ${hora} horas. Bom dia!!`
        document.body.style.background = '#d5b386'
    } else if (hora < 18) {
        imagem.src = 'tarde.png'
        msg.innerHTML = `Agora são exatamente ${hora} horas. Boa tarde!!`
        document.body.style.background = '#e6b54a'
    }else {
        imagem.src = 'noite.png'
        msg.innerHTML = `Agora são exatamente ${hora} horas. Boa noite!!`
        document.body.style.background = '#412e74'
    }
}


