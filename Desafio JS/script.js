let produto = prompt("Qual o produto que você quer comprar?")
let preço = Number(prompt(`Qual o valor do ${produto}??`))


function Cálcular(){
    let desconto = Number(prompt(`Qual o valor do desconto aplicado na compra do ${produto}`))
    let des = (preço*desconto)/100
    let res = document.querySelector('div#des')

    res.innerHTML = ''
    res.innerHTML += `<p>O ${preço} é o preço original do ${produto}</p>`
    res.innerHTML += `<p>O valor do desconto aplicado é ${desconto}% </p>`
    res.innerHTML += `O valor a pagar pelo seu novo ${produto}, com as aplicações de desconto, será de: ${preço - des}`
   
}