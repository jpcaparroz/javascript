function update() {
  let billValue = Number(document.getElementById("bill").value);
  let tipPercentual = Number(document.getElementById("tip").value);
  let splitValue = Number(document.getElementById("split").value);

  let billTotal = billCalculate(billValue, tipPercentual).toFixed(2);
  let billSplit = splitBill(billTotal, splitValue).toFixed(2);

  let tipTotalValue = billTotal - billValue
  let personPlural

  if(splitValue > 1) {
    personPlural = ` Person's`
  } else {
    personPlural = ` Person`
  }

  document.getElementById("tipValue").innerHTML = tipPercentual + "%";
  document.getElementById("splitQuantity").innerHTML = splitValue + personPlural;


  document.getElementById("billValue").innerHTML = "$ " + billTotal;
  document.getElementById("billSplit").innerHTML = "$ " + billSplit;
  document.getElementById("tipTotalValue").innerHTML = "$ " + tipTotalValue.toFixed(2);
}

function billCalculate(bill, tipPercentual) {
  tipPercentual = tipPercentual / 100;

  tipTotalValue = bill * tipPercentual
  return  tipTotalValue + bill;
}

function splitBill(bill, persons) {
  return bill / persons;
}
