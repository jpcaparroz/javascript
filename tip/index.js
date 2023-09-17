function outcome() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let result = 0;

  if (document.getElementById("sum").checked) {
    result = num1 + num2;

    document.getElementById("result").innerHTML = result;
  } else if (document.getElementById("sub").checked) {
    result = num1 - num2;

    document.getElementById("result").innerHTML = result;
  } else if (document.getElementById("mult").checked) {
    result = num1 * num2;

    document.getElementById("result").innerHTML = result;
  } else {
    result = num1 / num2;

    document.getElementById("result").innerHTML = result;
  }
}
