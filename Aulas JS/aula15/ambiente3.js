let n = [9, 4, 3]   // variavel composta ou array, guarda mais de um valor, elemento: par que agrupa memória, conteúdo e o índice que é a posição dos elementos
n.push(6) // acrescentar um elemento e um novo valor no final do vetor
n[4] = 7
n.sort() //botar do menor  para o maior 
console.log(n)
console.log(`O tamanho do vetor é ${n.length} elementos`) // tamanho, comprimento do vetor

// forma de exibição do percusso do vetor


for(let pos = 0; pos < n.length; pos++){
    console.log(`A posição ${pos} guarda o valor ${n[pos]}`)
}

let pos = n.indexOf(4)

if(pos == -1){
    console.log(` o valor a qual você solitou não foi encontrado`)
}else{
    console.log(`O valor foi encontrado na posição ${pos}`)
}