var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

if (hora < 12) {
    console.log('Bom dia! Dormiu bem?')
} else if(hora < 18) {
    console.log('Boa tarde! Tomou café?')
} else {
    console.log('Boa noite! Como foi seu dia?')
}