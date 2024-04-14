function MediaAluno(){
    let botao = document.querySelector('button.botao')
    let resp = document.querySelector('div#res')
    
    let nome = prompt('Qual o nome do aluno(a)??')
    let nota1 = Number(prompt(`Qual foi a primeira nota de ${nome}?`))
    let nota2 = Number(prompt(`Qual foi a segunda nota de ${nome}??`))

    let media = (nota1 + nota2)/2

    resp.innerHTML = ''
    if(media>=6){
        resp.innerHTML += `<h2>Analisando as notas a situação do aluno é a seguinte:</h2>`
        resp.innerHTML += `<p>Com as notas ${nota1} e ${nota2}, a média de ${nome} é ${media}</p>`
        resp.innerHTML += `<p>Com média acima de 6.0, ${nome} está <mark id="apr"><strong>APROVADO</strong></mark></p> `
    }else{
        resp.innerHTML += `<h2>Analisando as notas a situação de ${nome} é a seguinte:</h2>`
        resp.innerHTML += `<p>Com as notas ${nota1} e ${nota2}, média de ${nome} é ${media}</p>`
        resp.innerHTML += `Com a média abaixo de 6.0, ${nome} está <mark id="rep"><strong>Reprovado</strong></mark>`
    }
}