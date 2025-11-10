const display = document.getElementById("display");

function appendNumber(number) {
  if (display.innerText === "0") {
    display.innerText = number;
  } else {
    display.innerText += number;
  }
}

function appendOperator(operator) {
  const lastChar = display.innerText.slice(-1);
  if ("+-*/%".includes(lastChar)) return;
  display.innerText += operator;
}

function appendDot() {
  const parts = display.innerText.split(/[\+\-\*\/%]/);
  if (!parts[parts.length - 1].includes(".")) {
    display.innerText += ".";
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1) || "0";
}

function calculate() {
  try {
    display.innerText = eval(display.innerText.replace("÷", "/").replace("×", "*"));
  } catch {
    display.innerText = "Error";
  }
}
