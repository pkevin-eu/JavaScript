function tabua(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        alert('Não é possível fazer a tabuada sem número. Digite um número, por favor!')
    }else{
        let n = Number(num.value)  
        tab.innerHTML = ''
        let c = 1
        while( c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            c++
            tab.appendChild(item)
        }
    }
}
    
