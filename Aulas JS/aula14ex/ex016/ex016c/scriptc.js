function contar(){
    var inicio = document.getElementById('conti')
    var fim = document.getElementById('contf')
    var razão = document.getElementById('razao')
    var res = document.getElementById('res')
    // identificando os meus elementos DOM para manipulá-los.
    if(inicio.value.length == 0 || fim.value.length == 0 ||razão.value.length == 0 ){
        // Caso não seja acrescentado números dará uma mensagem de alerta para o usuário.
        res.innerHTML = 'Impossível contar!'
        alert('[ERROR] Faltam dados!')
    } else{
        // Caso o usuário acrescente número irá executar o código
        res.innerHTML = 'A contagem é: <br>'
        var i = Number(inicio.value)// Esssas 3 var são para transformar os retornos de string para number e funcionar
        var f = Number(fim.value)
        var r = Number(razão.value)        

        if(r <= 0){
            alert('Razão inválida, por isso vamos considerar a razão sendo "1" ')
            r = 1
        }
        
             // contagem crescente.
        var c = i
        while(c <= f){
            res.innerHTML += `${c}, \u{1F449} `
            c+=r
        }
        
             //contagem regressiva.

            for(c=i;c>=f;c-=r){
            res.innerHTML += `${c}, \u{1F449} ` 
        }
        
        res.innerHTML += `\u{1F3C1}`
    }
}
