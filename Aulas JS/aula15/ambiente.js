let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort() //tem que ficar no final das modificações do vetor porque está colocando ele em ordem
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)
for(let pos = 0;pos <= num.length;pos++){
    console.log(`${num[pos]}`)
}

let pos = num.indexOf(1)
if(pos == -1){
    console.log(`O valor dentro do vetor a qual você solitou não foi encontrado...`)
}else{
    console.log(`O valor está na posição ${pos}`)
}
