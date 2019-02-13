console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//criando um metodo(função) no api prototype string
//split quebrar a string , o array vai ser revertido, juntado no final
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

// sobreescrevendo metodo que ja tem no prototype - nao bom fazer isso
String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())