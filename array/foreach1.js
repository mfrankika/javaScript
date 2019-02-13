const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

/*
    forEach  pede func de callback -para cada interação no array
    tem a funcao de callback passando o proprio elemento e o indice deste

    1º param é o proprio elemento a ser percorrido e 2º param seu indice
    pode ter um 3º param que é o proprio array
*/
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)