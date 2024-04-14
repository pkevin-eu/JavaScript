var hoje = new Date()
var diaSem = hoje.getDay()
console.log(`${diaSem}`)
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/
switch(diaSem){
    case 0:
        console.log(`Hoje é Domingo aproveite sua folga!`)
        break
    case 1:
        console.log(`Hoje é Segunda dia de trablho.`)
        break
    case 2:
        console.log(`Hoje é Terça dia de trabalho.`)
        break
    case 3:
        console.log(`Hoje é Quarta dia de trabalho.`)
        break
    case 4:
        console.log(`Hojo é Quinta dia de trabalho, minha escrivaninha chega hoje!`)
        break
    case 5: 
        console.log(`Hoje é Sexta. Sextou! Dia de pagamente e aproveitar o fim de semana!`)
        break
    case 6:
        console.log(`Hoje é Sábado aproveite sua folga!`)
        break
    default:
        break
}