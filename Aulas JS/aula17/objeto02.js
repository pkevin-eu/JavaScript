// Outro objeto em JS

let pessoa = {nome:'Ana',
 sexo: 'Feminino',
peso: 51.4,
emagreceu(p=0){
    console.log('Emagreceu')
    this.peso -= p
}}


 pessoa.emagreceu(2)
 console.log(`${pessoa.nome} emagreceu e agora possui ${pessoa.peso}Kg`)