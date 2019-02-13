function MeuObjeto() {}
console.log(MeuObjeto.prototype)

//todos obj criado apartir da mesma funcao construtora apontam para o mesmo objeto.prototype
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)

// aponta para o atributo prototype daquela função
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}

// mudando a referencia do Object.prototype para o MeuObjeto.prototype
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

/*

supondo uma função MeuObjeto (ela pode ter um atributo prototype 
que aponta para MeuObjeto.prototype (e´um obj q pode ter atributos e 
este tem um prototipo "__proto__" que é object.prototype) 
a funcao MeuObjeto tem tb __proto que aponta para function.prototype 
que por sua vez aponta para Object.prototype)

*/
