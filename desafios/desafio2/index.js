let value = Number(prompt('Enter the value: '))

if (value >= 20) {
    document.getElementById('result').innerHTML = value
}
else {
    alert('The value must be > 20')
}
