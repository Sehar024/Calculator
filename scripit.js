function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}
function backspace() {
  let display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}
function percentage() {
  let display = document.getElementById('display');
  try {
    let value = eval(display.value);
    display.value = value / 100;
  } catch {
    display.value = 'Error';
  }
}


function calculate() {
  try {
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch {
    document.getElementById('display').value = 'Error';
  }
}
