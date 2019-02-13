/*
 Map - percorrer um array, ter o mesmo tamanho mas com os dados transformados em relacao ao original
*/
const nums = [1, 2, 3, 4, 5]

// For com propósito - a func de callback pode receber 3 param
//1º - o valor atual, 2º o indice , e 3º o array completo
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` //replace = substitui ponto por virgula

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)