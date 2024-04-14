function tabuada(){
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        alert('Impossível gerar tabuada sem número, por favor, adicione um número!')
    }else{
        let n = Number(num.value)
        tab.innerHTML = ''
        for(c=1;c<=10;c++){
            let opção = document.createElement('option')
            opção.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(opção)
        }






        /*let c = 1
        while( c <= 10){ 
            let item = document.createElement('option')
            tab.appendChild(item)
            item.text = `${n} x ${c} = ${n*c}`
            c++
        }*/
    }
}