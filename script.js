let displayValue = '';

function appendNumber(number) {
    displayValue += number;
    document.getElementById('display').value = displayValue;
}

function appendOperator(operator) {
    if (displayValue !== '' && !isNaN(displayValue[displayValue.length - 1])) {
        displayValue += operator;
        document.getElementById('display').value = displayValue;
    }
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (e) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}
