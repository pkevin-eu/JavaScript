function verificador() {
     var data = new Date()
     var ano = data.getFullYear() 
     //Colocando o ano atual no sistema
     var fano = document.getElementById('txtano')
     var res = document.getElementById('res')
     // identificando meus elementos DOM para manipulá-los a vontade
     if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERROR] Verifique os dados novamente, por favor.')
        // Se não colocar caracteres ou um número de ano inválido, tipo futuro ou o próprio ano em quetão, dará erro
     } else{
        var fsexo = document.getElementsByName('radsex') // identificando as caixas de checkbox pelo "name"
        var idade = ano - Number(fano.value) //Convertendo o valor na caixa pq ela retorna como string, assim ela irá retornar como número msm
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') 
        // Aqui é nd mais que colocando imagem não pelas tags do html, mas pelo próprio JS. E é dessa forma que deve ser feito
        if(fsexo[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //criança
            img.setAttribute('src', 'Menino-pq.png')
            }else if (idade < 21) {
                //jovem
            img.setAttribute('src','Homem-jovem-j.png')
            }else if (idade < 50) {
                //adulto
            img.setAttribute('src','Homem-adulto-a.png')
            }else {
                //idoso
            img.setAttribute('src', 'Homem-idoso-i.png')
            }
        } else {if(fsexo[1].checked){                       
            gênero = 'Mulher'
        }   if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src','Menina-pq.png')
        }else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'Mulher-jovem.png')
        }else if (idade < 50){
            //adulto
            img.setAttribute('src', 'Mulher-adulta.png')
        }else{
            //idoso
            img.setAttribute('src', 'Mulher-idosa.png')
        }}
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
     }
     

}