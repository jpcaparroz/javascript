let num1 = 8
let num2 = 5

let total = num1 + num2

console.log(num1 + num2)

// Resto da divisão
console.log(num1 % num2)

// Exponencial
console.log(num1 ** num2)

// Incremento ++
console.log(total++)
console.log(++total)

// Redução --
console.log(total--)
console.log(--total)

// Operador de Atribuição
let num3 = 5

num3 += 15
num3 *= 15
num3 /= 15
num3 -= 15

console.log(num3)

// Operador de comparação
let num4 = 5

console.log(num4 >= 5)
console.log(num4 > 5)
console.log(num4 < 5)
console.log(num4 <= 5)
console.log(num4 === 5)
console.log(num4 !== 5)


// Operador de igualdade
num1 = '1'
num2 = 1

console.log(num1 == num2) // stric | verifica somente valor
console.log(num1 === num2) // lose | verifica tipo/valor


// Operador ternário
let driverSpeed = 80
let speed = driverSpeed > 100 ? 'Above' : 'Below' // pergunta ? sim : nao

console.log(speed)


// Operador lógico

// AND
let aboveAge = true
let voteId = true

let canVote = aboveAge && voteId

console.log(canVote)

// OR
aboveAge = true
voteId = false

canVote = aboveAge || voteId

console.log(canVote)

// NOT
aboveAge = false
voteId = false

let canPass = !canVote

console.log(canPass)


// Operador lógico com string
let orderColor = undefined
let availableColor = 'white'

let deliveryColor = orderColor || availableColor

console.log(deliveryColor)


// If/Else
let velocity = 120.1

if (velocity > 120) {
    console.log('You are fast, reduce.') 
}

else if (velocity > 40 && velocity < 120) { 
    console.log('Nice velocity!')
}

else
    console.log('You are to slow.');


// Switch/Case
let airport = 'SP'

switch (airport) {
    case 'GUA':
        
        console.log('Guarulhos')
        break;

    case 'SP':
        
        console.log('Congonhas')
        break;

    default:

        console.log('Airport not found')
        break;
}

// For loop
for (let i = 0; i <= 10; i++) {
    console.log('Numero: ' + i)
    
}

// While loop
i = 10

while (i >= 0) {

    console.log('Numero', i)

    i--    
}


// Do While loop
i = 10

do {
    console.log('Numero', i)
    i++
} while (i <= 20);


// For in
const myCar = {
    model: 'mercedez',
    year: 2023
}

for (let i in myCar) 
    console.log(i, myCar[i])


// For of
const names = ['raf', 'john', 'abe']

for( let i of names)
    if(i === 2) break
    console.log(i)


