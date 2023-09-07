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