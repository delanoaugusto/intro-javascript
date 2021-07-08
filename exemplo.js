//números pares de 0 a 100.

//for (let i =0; i<=100;i++){
   // if(i%2 == 0){
  //      console.log(i)
//    }

//}

//Calcular a média e dizer o resultado

function calculaMedia(nota1, nota2, nota3){
    let media = (nota1+nota2+nota3)/3
    if(media>= 7){
        return 'Aprovado'
    }
    if (media >=5 && media <7){
        return 'recuperação'
    }
    if (media <5){
        return 'reprovado'
    }
}

console.log(calculaMedia(8,5,8))
