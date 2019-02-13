const a = 1
const b = 2
const c = 3

//var a que recebe o valor da const a
const obj1 = { a: a, b: b, c: c }

// nesta o nome da const e do atributo sao iguais evitando a duplicidade  a:a
const obj2 = { a, b, c }
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

// na versao nova pode ser feito assim as atribuiçoes
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function() {
        // ...
    },
    /* forma reduzida*/
    funcao2() {
        // ...
    }
}
console.log(obj5)