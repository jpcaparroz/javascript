// Function Declaration
function movie() {
  console.log("film.name");
}

movie();

// Function Expression
const movieE = function () {
  console.log("film.name");
};

movieE();

// Arugments
function price() {
  let total = 0;

  for (let value of arguments) total += value;

  return total;
}

console.log(price(5,5,5,5,5,5));

// Default params
function financiar(valor, anos, juros = 2.5) {
    return valor * juros / 100 * anos
}

console.log(financiar(14500, 3));