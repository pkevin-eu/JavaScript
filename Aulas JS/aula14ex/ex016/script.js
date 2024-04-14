function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if( inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        window.alert('faltam dados!')
       
    }else{
        res.innerHTML = 'Contando.. <br>'
        let i = Number(inicio.value)// converte o que é colocado no formulário de string para number
        let f = Number(fim.value)// mesma coisa de cima
        let p = Number(passo.value)// mesma coisa...
        if(p <= 0){
            window.alert('Passo inválido, considerarei PASSO 1!')
            p = 1
        }
        if ( i < f){
            //Contagem crescente
            for(c = i; c <= f; c += p) {
                 res.innerHTML += `${c} \u{1F449}`
        }
       
        }else {
            //Contagem regrissiva
            for(c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
