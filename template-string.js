"Delano é"
let role = "transformador"
console.log(`Delano é ${role}`)

//operadores ternários
//if...else
//if (idade>=18){
//    return 'Maior de idade'
//} else {
//    return 'Menor de idade'
//}

//idade >= 18 ? 'Maior de idade': 'Menor de idade'

function calculaIdade(idade){
//    if(idade >= 18){
//        return 'Maior de idade'
//    }else {
//        return 'Menor de idade'
//    }
return idade >= 18 ? 'Maior de idade': 'Menor de idade'
}
console.log(calculaIdade(20))

//arrow functions
//function soma(a,b){
//    return a+b
//}

//console.log(soma(3,5))

//const soma2 = (num1,num2) => num1+num2
const sayHello = name => `Hello ${name}`
console.log(sayHello('Mari'))

//arrays
const alunasGama = ["Paula", "Maria", "Estela", "Clara"]
//Acessar informações num array
console.log(alunasGama[3])

//operador spread (...)
const alunasXp = [...alunasGama, "Simara"]
console.log(alunasXp)

//Metodos de iteração
//for (let i =0;i<alunasXp.length;i++){
//    console.log(alunasXp[i])
//}
//Map
alunasXp.map(aluna => console.log(aluna))

//Filter
const numeros = [34, 45, 67, 90, 55, 76]
const numerosImpares = numeros.filter(numero => numero%2 !=0)
console.log(numerosImpares)

const numerosPares = numeros.filter(numero => numero%2 ==0)
console.log(numerosPares)

const numerosOrdenadosCrescente = numeros.sort()
console.log(numerosOrdenadosCrescente)
const numerosOrdenadosDecrescente = numeros.sort((a,b) => b-a)
console.log(numerosOrdenadosDecrescente)

//reduce - reduz nosso array a um resultado de uma operação matematica
const numbers = [1,34,35]
const soma3 = numbers.reduce((valorAnterior,valorAtual)=>{
    return valorAnterior + valorAtual
})
console.log(soma3)
