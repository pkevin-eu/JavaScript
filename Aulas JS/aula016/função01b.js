// Funções são açoes que são executadas quando são chamadas ou disparadas em decorrência de algum evento

//Função de par e ímpar

function parimp(n){ //tudo dentro da function é o fator ação da função, na chamada tem o parâmetro real e no nome da função tem o formal
    if(n%2==0){
        return 'Par!' // returno
    } else{
        return 'Ímpar!'// retorno
    }
}
console.log(parimp(0)) // chamada, disparada