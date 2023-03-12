let result = document.getElementById('result');

function input(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  let expression = result.value;

  if (expression) {
    result.value = eval(expression);
  }
}
