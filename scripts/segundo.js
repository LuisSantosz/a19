/*segunda parte*/

let numero3 = 5;
let numero4 = 8;

function subtracao(num3, num4){
if(num3 <num4){
return console.log('Não foi possível subtrair')
} else{
    return console.log (num3 - num4)
}


}

/*---------------------*/
subtracao(numero3, numero4)

function divisao(num3, num4) {
if(num3 <0) {
return console.log('Não foi possível dividir')

}

else{

    return console.log(num3 / num4)
}
}
divisao(numero3, numero4)
/*---------------------*/

const fruta = {
    nome: 'Maça',
    cor: 'Vermelha',
    peso: '150g',
    tipo: 'Fruta'
}
console.log(fruta)
