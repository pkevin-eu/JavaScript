function verifique() {
var data = new Date()
var ano = data.getFullYear() // pegar todos dígitos do ano atual
var fano = window.document.getElementById('txtano')
var res = window.document.getElementById('res')
//Identificando meus elementos DOm para manipulá-los a vontade

if (fano.value.length == 0 || Number(fano.value) > ano){
    window.alert('[ERROR] Verifique os dados novamente!')
}else {
    var fsex = window.document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = '' //String vazia a principio
    var img = window.document.createElement('img')
    img.setAttribute('id', 'foto')

} if (fsex[0].checked){
    gênero = 'Homem'
    if(idade >= 0 && idade < 10){
        //criança
        img.setAttribute('src', 'Menino-pq.png')
    } else if (idade < 21){
        //jovem
        img.setAttribute('src', 'Homem-jovem-j.png')
    } else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'Homem-adulto-a.png')
    } else {
        //idoso
        img.setAttribute('src', 'Homem-idoso-i.png')
    }

} else{ if (fsex[1].checked){
    gênero = 'Menina'
} if(idade >= 0 && idade < 10){
    //criança
    img.setAttribute('src', 'Menina-pq.png')
} else if (idade < 21){
    //jovem
    img.setAttribute('src', 'Mulher-jovem.png')
} else if (idade < 50){
    //adulto
    img.setAttribute('src', 'Mulher-adulta.png')
} else {
    //idoso
    img.setAttribute('src', 'Mulher-idosa.png')
}}
res.style.textAlign = 'center'
res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
res.appendChild(img)



}

