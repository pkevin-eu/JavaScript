let valores = [5, 4, 6, 9, 1, 3]
console.log(`Maneira simples de exibição do vetor abaixo:`)
console.log(valores)
valores.push(7)
valores.sort()
//forma otimizada da estrutura de repetição de controle for para arrays e objetos

for(let pos in valores){
    console.log(`A posição ${pos} guarda o valor ${valores[pos]} do vetor`)
}

