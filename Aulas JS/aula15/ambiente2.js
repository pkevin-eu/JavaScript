let num = [2, 6, 7, 1, 4]
num[5] = 9
num.push(5) // adiciona um valor no novo elemento criado no final do array
console.log(`A quantidade de elementos do meu array é ${num.length}`)
num.sort() // bota em ordem crescente
console.log(`Nosso vetor é ${num}`)
console.log(`O primeiro valor é: ${num[0]}`)
let pos = num.indexOf(1)
if(pos == -1){
    console.log('O valor a qual você solitou dentro do vetor não foi encontrado')
}else{
    console.log(`O valor a qual você solitou foi encontrado nan posição ${pos}`)
}