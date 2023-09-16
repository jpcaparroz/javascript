// Arrays
const friends = ['jota', 'filo', 'jon']

friends.push('jojo')
friends.unshift('pori')

friends.splice(1, 0, 'seven')

console.log(friends)

console.log(friends.indexOf('jojo'))

console.log(friends.includes('jojo'))

// Array de referencia
let movies = [
    {id: 1, movieName: 'filme1'},
    {id: 2, movieName: 'filme2'},
    {id: 3, movieName: 'filme3'}
]

searchMovie = movies.find(function (movie) {
    return movie.movieName == 'filme3'
})

console.log(searchMovie)

// Arrow function
searchMovie2 = movies.find(movie => movie.movieName == 'filme2')

console.log(searchMovie2)

// Array pop
console.log(movies.pop())
console.log(movies)

// Array shift
console.log(movies.shift())
console.log(movies)

// Array splice
let array = [1,2,3,4,5,6]

console.log(array)

array.splice(2,2)

console.log(array)

// Limpando uma array
let array2 = [1,2,3,4,5,6,7,8,9,10]
console.log(array2)

array2 = []
console.log(array2)

array2.length = 0
console.log(array2)

array2.splice(0, array2.length)
console.log(array2)


// Concatenando arrays
let nums = [1,2,3]
let abc = ['a','b','c']

all = nums.concat(abc)
half = all.slice(2, 4)

console.log(all)
console.log(half)


// Join Array
let nomes = ['Jota', 'Pedro', 'Dias']

console.log(nomes)

let nomesJoin = nomes.join('-')

console.log(nomesJoin)

// Ordenando Array
let names = ['Joao', 'Pedro', 'Andy']

names.sort()
console.log(names)


// Revertendo Array
let names2 = ['Joao', 'Pedro', 'Andy']

names2.reverse()
console.log(names2)


// Verificando array
// const tempBr = [-34, -32, -18, -23, -3]

// const tempNeg = tempBr.every(value => value <= 0)

// let tempPos = tempBr.every(value => value >= 0)

// console.log(tempNeg)
// console.log(tempPos)


// Filter array
const tempBr = [-34, -32, 18, -23, -3]

const tempNeg = tempBr.filter(value => value <= 0)

let tempPos = tempBr.filter(value => value >= 0)

console.log(tempNeg)
console.log(tempPos)