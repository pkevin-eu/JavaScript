let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.querySelector('div#res')
let valores = []   

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function Adicionar(){
    if(isNumero(num.value) >= 1 && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} adicionado`
        lista.appendChild(item) //antes do appenChild é onde vai entrar o item criado
        res.innerHTML = ''
    } else{
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function validador() {
    let total = valores.length
    let somar = 0
    let media = 0
    let maior = valores[0]
    let menor = valores[0]
    for (let pos in valores){
        somar += valores[pos]
    }
    for(let pos in valores){
        if(valores[pos] > maior){
            maior = valores[pos]
        }
        if(valores[pos] < menor)
        menor = valores[pos] 
    }
    media = somar / total
    res.innerHTML = ''
    res.innerHTML += `<p>No vetor existem ${total} valores</p>`
    res.innerHTML += `<p>O maior valor encontrado é: ${maior}</p>`
    res.innerHTML += `<p>O menor valor encontrado é: ${menor}</p>`
    res.innerHTML += `<p>A soma dos valores dentro do vetor é: ${somar}</p>`
    res.innerHTML += `<p>A média dos valores adicionados dentro do meu array foi: ${media}</p>`

}