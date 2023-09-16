console.log('Testando log');

let firstName = 'Joao';
let lastName = 'Caparroz';

const idade = 23;

console.log(firstName);
console.log(lastName);


let itemName = 'Ball'
let itemPrice = 5
let itemAvailable = true
let itemColor

// Verificando tipo da variavel
console.log(typeof itemColor)

// Object
let ball = {
    itemName: 'Ball',
    itemPrice: 5.6,
    itemAvailable: true,
    itemColor: 'Blue'
}

ball.itemAvailable = false

console.log(ball)

// Array
let friends = ['Ale', 'Kio', 'Juy', 'Hop']

friends[3] = "Rug"

console.log(friends[3])

// Functions
function autoConcat(string1, string2) {

    finalString = string1 + string2
    return finalString
}

console.log(autoConcat('oi', 'tudobem?'))


function descount(price, percentage) {
    
    return price - ( price * percentage / 100)
}

console.log(descount(500, 10))