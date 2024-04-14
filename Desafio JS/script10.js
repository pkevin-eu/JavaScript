function calcular(){
    let botão = document.querySelector('button.calc')
    let resp = document.querySelector('div#resp')

    let a = Number(prompt('Qual será o valor do coeficiente "a"?'))
    let b = Number(prompt('Qula será o valor do coeficiente "b"?? '))
    let c = Number(prompt('Qual será o valor do coeficiente "c"???'))
    
    let delta = `${b**2 - 4*a*c}`
    let x1 = (-b + Math.sqrt (delta))/(2*a) 
    let x2 = (-b - Math.sqrt(delta))/(2*a)

    if(delta < 0){
        alert('Não existe raiz quando o delta é negativo, tente novamente...')
    } else if(delta == 0){
        alert(`delta sendo igual a 0 irá existir apenas uma raiz, e será: ${x1}`)
    }else{
        resp.innerHTML = ''
        resp.innerHTML += `<p>A equação atual é: ${a}x<sup>2</sup> + ${b}x + ${c} = 0</p>`
        resp.innerHTML += `<p>O valor do &Delta; é: ${delta}</p>`
        resp.innerHTML += `<p>O valor das raízes são ${x1} e ${x2}</p>`
    }

    

    
   
}