
//global,função,ressignificado,redeclarado,hospedado
var myName = "Delano";//string

console.log(myName)
//função,bloqueado,ressignificado
let language = "Javascript";
//função,bloqueado
const pattern = "ECMAScript"

{
    var age = 32;

}

console.log(age)

var age = 32 //number
var hieght = 1.58 //number

null
undefined
var isStudent = false //boolean

//Objeto, array e function

//Objeto
var person = {

    "name": "Simara",
    "age": 32
}

var student = [ "Simara", "Maria", "Joao"]

function sum(a,b){
    return a + b
}

//operador typeof
console.log(typeof isStudent)
console.log(typeof sum)

//operadores aritméticos
// + - * / % ++ --
var sumTwoNumbers = 1+3;
console.log(sumTwoNumbers);
var subTwoNumbers = 1-3;
console.log(subTwoNumbers);
var multTwoNumbers = 1*3;
console.log(multTwoNumbers);
var divTwoNumbers = 1/3;
console.log(divTwoNumbers);
var restTwoNumbers = 1%3;
console.log(restTwoNumbers);
var num1 = 1;
console.log(++num1)
console.log(--num1)

//operadores de atribuição
// = atribuição
//atribuição de soma
var x = 1;
var y = 3;
console.log(x+=y)
console.log(x-=y)
console.log(x*=y)
console.log(x/=y)
console.log(x%=y)

//operadores de comparação
// ==
// ===
// !=
// < ou <=
// > ou >=

//operadores lógicos
// e &&
// ou ||
// ! negação

var num = 1;
num = 5;
if (num === 1){
    console.log("num é igual a 1")
} else if (num === 2){
    console.log("num é igual a 2")
} else {
    console.log("num é 5")
}


var mes = "janeiro";

switch (mes){

    case "fevereiro":
        console.log("mes 2");
        break;
    
    case "março":
        console.log("mes 3");
        break;
    
    case "janeiro":
        console.log("mes 1");
        break;

    default:
        console.log("nenhum do casos acima foi atendido");

}

var colors = ["black", "white", "yellow", "green", "blue"];

for (var i = 0; i < colors.length; i++){
    console.log(colors[i]);

}

for (var j = 0; j <= 10;j++){
    console.log(j);
}

var i = 1;
while (i <= 10){
    console.log(i);
    i++;
}

var k = 1;
do {
    console.log(k);
    k++;
} while(k < 10);


function sayHello(name, lastName){
    console.log("Hello "+ name+ ' '+lastName)

}

sayHello("Delano", "Augusto");

function sum2(a,b){
    return a+b;

}

console.log(sum2(40,60));

class Book{
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;

    }
    read(){
        return `Estou lendo ${this.title}`
    }
}

//let book = new Book('Algoritmos para viver', 'Brian', 500);
//let otherBook = new Book('Um exu em nova York', 'Cidinha da Silva', 100)
//console.log(otherBook.read());
//console.log(book, otherBook);

class ITBook extends Book{
    constructor(title, author, pages, technology){
        super(title, author, pages);
        this.technology = technology;
    }

}

let itBook = new ITBook('Algoritmos para viver', 'Brian', 500, 'Algoritmos');

console.log(itBook);
console.log(itBook.title);

class Person {
    constructor(name){
        this._name = name;

    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value
    }
}

let person1 = new Person('Delano');
person1.name = "Del";
console.log(person1.name);



