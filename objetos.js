const pessoa = {
    nome:"Delano",
    idade:30,
    cidade:"Ouro Branco"
}

//notação de ponto
console.log(pessoa.nome)

//notação de colchetes
console.log(pessoa['idade'])

//como desestruturar objetos
const{nome, idade, cidade} = pessoa

console.log(nome)
console.log(idade)
console.log(cidade)