let vetor =  [5, 9, 8, 2, 1, 6]

console.log(vetor)
vetor.sort()
console.log(`Nosso vetor é composto pelos seguintes valores colocados em ordem crescente ${vetor}`)

// forma simplificada da estrutura de repeitção for para objetos e array

for(let pos in vetor){
    console.log(`A posição ${pos} armazena o conteúdo ${vetor[pos]}`)
}