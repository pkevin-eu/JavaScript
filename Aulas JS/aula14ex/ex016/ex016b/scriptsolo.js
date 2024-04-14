function contador() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resp = document.getElementById('resp')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resp.innerHTML = 'Impossível contar <br>'
        alert('[ERROR] Faltam dados!')
    }else{
        resp.innerHTML = 'Contando...'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            alert('passo inválido, irei considerar PASSO 1')
            p = 1
        }
        if(i < f){ // Contagem crescente
            for(c = i; c <= f; c += p){
            resp.innerHTML += `${c}, \u{1F449}`
            }
        }else{ // Contagem regressiva
           for(c = i; i >= f; c -= p){
            resp.innerHTML += `${c}, \u{1F449}`
           }
        }

       resp.innerHTML += `\u{1F3C1}`
    } 
    
}