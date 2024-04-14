function reajustar(){
    let nome = prompt('Qual o nome do funcionário?')
    let salario = Number(prompt(`Atualmente, ${nome}, qual é o seu salário??`))
    let porcentagem = Number(prompt(`Pois muito bem, para fazer o reajuste do salário do ${nome} preciso saber a porcentagem que será reajustada. Por favor, insire a %...`))


    let botao = document.querySelector('button.botao')
    let resposta = document.querySelector('div#resp')
    let reajuste = (salario*porcentagem)/100


    resp.innerHTML = ''
    resp.innerHTML += `<p>O salário atual era de ${salario} R$</p>`
    resp.innerHTML += `<p>A porcentagem sendo ${porcentagem}%, o salário irá sofrer uma alteração de ${reajuste}  R$ acrescentados no próximo mês.</p>`
    resp.innerHTML += `<p>Portanto, a partir daí, ${nome} vai passar a receber um salário de ${salario + reajuste} R$</p>` 

}