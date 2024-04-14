function Verificar() {
let botao = document.querySelector('button.botao')
let resp = document.querySelector('div#resp')
let ano = prompt('Qual o ano você quer analizar?')

resp.innerHTML = ''

if(ano%400 == 0 || ano%4==0 && ano%100!=0){
    
    resp.innerHTML += `O ano analizado foi ${ano} e ele é <mark>É Bissexto</mark>`
} else {
    
    resp.innerHTML +=`O ano analizado foi ${ano} e ele é <mark>Não é Bissexto</mark>`
}
}