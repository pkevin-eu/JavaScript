function preçomudou() {
    let botao = document.querySelector('button.botao')
    let resp = document.querySelector('div.resp')


    let preço_antes = Number(prompt('Qual era o preço anterior do produto?'))
    let preço_posterior = Number(prompt('Qual é o preço atual do produto??'))
    

    resp.innerHTML = ''

    if(preço_antes > preço_posterior){
        
        let preço_diferença = `${preço_antes - preço_posterior}`

        let desconto = `${(preço_diferença*100)/preço_antes}`

        resp.innerHTML = `<h2>Analisando os valores informados</h2>`
        resp.innerHTML += `<p>O produto custava R$ ${preço_antes} reais e agora custa R$ ${preço_posterior} reais.</p>`
        resp.innerHTML += `<p>Hoje o produto está mais barato.</p>`
        resp.innerHTML += `<p>O preço diminuiu em R$ ${preço_diferença} reais</p>` 
        resp.innerHTML += `<p>Uma variação para baixo, desconto, de ${desconto}%`
    }else{
        let preço_gap = `${preço_posterior - preço_antes}`
        let acrescimo = `${(preço_gap*100)/preço_antes}`

        resp.innerHTML += `<p>O produto custava R$ ${preço_antes} e agora custa R$ ${preço_posterior} reais</p>`
        resp.innerHTML += `<p>Hoje o produto está mais caro.</p>`
        resp.innerHTML += `<p>O preço aumentou R$ ${preço_gap} reais</p>`
        resp.innerHTML += `<p>Uma vairação para cima, acréscimo, de ${acrescimo}%</p>`
    }
}