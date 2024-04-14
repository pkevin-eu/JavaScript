let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}


function Adicionar(){
    if(isNumero(num.value) >= 1 && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adcionado`
        lista.appendChild(item)
        
    } else{
        alert('Valor Inválido ou já encontrado na lista, por favor, tente novamente!')
    }
    num.value = ''
    num.focus()
}

function avaliar(){
    let total = valores.length
    let soma = 0
    let media = 0
    let maior = valores[0]
    let menor = valores[0]

    for(let pos in valores){
        if(valores[pos] > maior){
            maior = valores[pos]
        }
        if(valores[pos] < menor){
            menor = valores[pos]
        }
    }

    for(let pos in valores){
        soma += valores[pos]
    }
    media = soma / total
    res.innerHTML = ''
    res.innerHTML += `<p>O total de valores adicionado no array foi de: ${total}</p>`
    res.innerHTML += `<p>Os valores adicionados se somados resultam em ${soma}</p>`
    res.innerHTML += `<p>A média dos valores do vetor é ${media}</p>`
    res.innerHTML += `<p>O menor valor encontrado foi ${menor}</p>`
    res.innerHTML += `<p>O maior valor encontrado foi ${maior}</p>` 
}