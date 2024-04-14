function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('Impossível fazer uma tabuada sem número...')
    } else{
        let n = Number(num.value)
        tab.innerHTML = ''
        for(c = 1; c <= 10;c++){
            let item = document.createElement('option')//Dessa forma criamos tag de html dentro do js
            item.text = `${n} x ${c} = ${n*c}`
            //Para outras linguagens saberem qual dos itens foi selecionado: tab.value = `tab${c}`
            tab.appendChild(item)//Adicionar um elemento que é filho
        }
    }
}