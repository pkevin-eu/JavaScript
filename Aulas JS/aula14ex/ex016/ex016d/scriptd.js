function contagem(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resp = document.getElementById('resp')

    if(inicio.value.length == 0 ||fim.value.length == 0 || passo.value.length == 0 ){
        alert('[ERROR] Faltam dados!')
    }else{
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        resp.innerHTML = ''
        if(p<=0){
            alert('Passo inválido, irei considerar passo 1')
            p = 1
        }
        if (i < f){
            // contagem crescente
            for(c = i; c <= f; c += p){
                resp.innerHTML += `${c}, \u{1F449}`
            }
        }else{
            // contagem regressiva
            let c = i 
            while(c >= f){
                resp.innerHTML += `${c}, \u{1F449}`
                c -= p
            }
        } resp.innerHTML += `\u{1F3C1}`
    }
}