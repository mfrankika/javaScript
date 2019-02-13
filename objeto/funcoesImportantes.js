const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // nome,idade,peso
console.log(Object.values(pessoa)) // rebeca,2,13
console.log(Object.entries(pessoa))// lista tanto chave como valores

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`) //lista chave valor
})

// usando destructruing  (desestruturando os elementos de um array) para obter a lista
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // se a propriedade dataNascimento vai ser listada
    writable: false, // se aceita ser modificada - funciona como congelada
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) //dest = objt destino que vai receber os atrib//

Object.freeze(obj)
obj.c = 1234
console.log(obj)