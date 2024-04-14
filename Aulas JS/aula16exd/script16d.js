let cnum = document.querySelector('input#cnum')
let lista = document.querySelector('select#clista')
let res = document.getElementById('res')
let numeros = []

function recebeNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inVetor(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar (){
    if(recebeNumero(cnum.value) >= 1 && !inVetor(cnum.value, numeros)){
        numeros.push(Number(cnum.value))
        let item = document.createElement('option')
        item.text = `O valor ${cnum.value} foi adicionado`
        lista.appendChild(item)
        
    } else{
        alert('Valor inserido inválido ou já encontrado na lista, por favor, verifique novamente...')
    }
    cnum.value = ''
    cnum.focus()
    res.innerHTML = ''
}


function avaliar (){
    let elementos = numeros.length
    let soma = 0
    for (let pos in numeros){
        soma += numeros[pos]
    }
    let media = 0
    media = soma / elementos
    let maior = numeros[0]
    let menor = numeros[0]
    for(let pos in numeros){
        if(numeros[pos] > maior){
            maior = numeros[pos]
        }
        if(numeros[pos] < menor){
            menor = numeros[pos]
        }
    }


    res.innerHTML += `<p>O Array possui ${elementos} elementos no total, isto é, seu tamanho.</p>`
    res.innerHTML += `<p>A soma dos valores de todos os elementos do vetor é: ${soma}</p>`
    res.innerHTML += `<p>A média dos valores somados dentro do vetor é: ${media}</p>`
    res.innerHTML += `<p>O maior valor encontrado no vetor foi: ${maior}</p>`
    res.innerHTML += `<p>O menor valor obtido dentro do array foi: ${menor}</p>`
}