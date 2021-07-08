let resultado = fizzBuzz();
console.log(resultado)

function fizzBuzz(entrada){
    if (typeof entrada != 'number')
       return 'Não é um número';
    if( entrada % 3 === 0 && entrada % 5 === 0)
       return 'FizzBuzz'
    if( entrada % 3 === 0 )
       return 'Fizz';
    if( entrada % 5 === 0)
      return 'Buzz';

    return entrada;
}

let newStr = '';

function reverseAString(str){
var j = str.length;

for(var i=1;i<=j;i++) {
newStr = newStr + str[j-i];
console.log(newStr);
}
newStr = '';
}

let resultado2 = reverseAString('Hello Gama Academy')
let resultado3 = reverseAString('Summoners War')

function converToFahrenheit(value){
    return value*1.8 + 32;

}

let result = converToFahrenheit(40);
console.log(`O valor em Fahrenheit é ${result}`)


const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists =[]

newListForm.addEventListener('submit', function(e){
    e.preventDefault()
    const listName = newListInput.value
    if (listName === null || listName === '') return
    const list = createlist(listName)
    newListInput.value = null
    lists.push(list)
    render()
})

function render(){
    clearElement(listContainer)
    lists.forEach(function(list){
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerText = list.name
        listContainer.appendChild(item)
    })

}

function createlist(name){
    return {id: Date.now().toString(), name: name}
}

function clearElement(element){
    while (element.firstChild){
        element.removeChild(element.firstChild)
    }
}

render()