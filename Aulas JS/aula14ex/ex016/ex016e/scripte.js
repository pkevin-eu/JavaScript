function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let razao = document.getElementById('txtr')
    let resp = document.getElementById('resp')

    if(inicio.value.length == 0 || fim.value.length == 0 || razao.value.length == 0){
        alert('[ERROR] Faltam dados!')
    }else{
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let r = Number(razao.value)
        resp.innerHTML = ''
        if(r<=0){
            alert('RAZÃO inválida, iremos considerar sendo razão = 1!!!')
            r = 1
        }
        // Contagem Progressiva...
        for(c = i; c <= f; c += r){
            resp.innerHTML += `${c}, \u{1F449}`
        }
        // Contagem Regressiva...
       for(c = i; c >= f;c -= r){
        resp.innerHTML += `${c}, \u{1449} `
       }resp.innerHTML +=`\u{1F3C1}` 
    }
}