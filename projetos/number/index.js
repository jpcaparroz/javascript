let pcNumber;
let userNumbers = [];
let attempt;
let guesses;

function init() {
    pcNumber = Math.floor(Math.random() * 100 + 1);
    
}

function guess() {
    attempt = Number(document.getElementById("inputBox").value);

    compare(attempt, pcNumber);
    tip(attempt, pcNumber);
}

function compare(num1, num2) {
    if (num1 === num2) {
        won();
    } else {
        userNumbers.push(attempt);

        document.getElementById("attempts").innerHTML = userNumbers.length;
        document.getElementById("guesses").innerHTML = userNumbers;
        document.getElementById("inputBox").value = "";
    }

}

function tip(num1, num2) {
    let tip;

    if (num1 > num2) {
        tip = "above 🟢";
    } else if (num1 < num2) {
        tip = "below 🔴";
    }

    document.getElementById("textOutput").innerHTML = tip;
}

function won() {
    alert("You won with " + userNumbers.length + " attempts");

    restart()

}

function restart() {
    window.location.reload()
}
