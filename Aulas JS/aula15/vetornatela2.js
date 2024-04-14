let numeros = [8, 6, 5, 4, 7]

console.log(numeros)

numeros.sort()

//Se cria uma variável para se referenciar as determinadas posições de cada valor dos elementos do vetor, array.

for(pos = 0;pos < numeros.length; pos++){
    console.log(`A posição ${pos} contém o valor ${numeros[pos]}`)
}