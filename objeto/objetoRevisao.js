// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira' // usar notação de ponto
produto['marca do produto'] = 'Generica' // usar notação de array 
produto.preco = 220

console.log(produto)

//excluindo atributos de um obj
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },

    //um array de obj dentro obj carro
    condutores: [{
        nome: 'Junior',
        idade: 19
    },/* 2º objt dentro do mesmo array*/ {
        nome: 'Ana',
        idade: 42
    }], /* funções  dentro obj carro*/
    calcularValorSeguro: function() {
        // ...
    }
}

// acessando atraves da notação de ponto
carro.proprietario.endereco.numero = 1000

// tb acessar atraves notação de []
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

// delete carro.condutores - tudo que esta embaixo vai ser excluido
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)