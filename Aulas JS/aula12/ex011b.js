var idade = 20
console.log(`Olá! você tem ${idade} anos.`)
if(idade < 16) {
    console.log('Não vota, pois é menor de idade')
} else if (idade < 18 || idade > 67) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório!')
}