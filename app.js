const livros = require('./database')

//pegar um imput

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N')

//Se for sim, mostra as categorias disponíveis e pergunta qual categoria escolhe
if(entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponíveis:')
    console.log('Produtividade e estilo de vida', '/História brasileira', '/Américas', '/Tecnologia','/Estilo de vida')

    const entradaCategoria = readline.question('Qual categoria você escolhe:')
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)
    console.table(retorno)
} else{
//Se não, mostra todos os livros em ordem crescente por páginas
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Essas são todos os livros disponíveis')
    console.table(livrosOrdenados)
}



