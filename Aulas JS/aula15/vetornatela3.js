let num = [5, 9, 7, 4, 2]
num.push(1)
num.sort()

console.log(num)
console.log(`A variável composta possui ${num.length} posições.`)

for(let pos = 0; pos < num.length; pos++ ){
    console.log(`A posição ${pos} guarda o valor ${num[pos]}`)
}