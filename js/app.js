function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + ''
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin()
    }
}
function generatePin() {
    const pin = getPin()
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function (event) {
    const calcInput = document.getElementById('typed-numbers');
    const number = event.target.innerText;
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }

    else {
        const previousNumber = calcInput.value;
        const newCalc = previousNumber + number;
        calcInput.value = newCalc;
    }

});
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typeNumbers = document.getElementById('typed-numbers').value;
    const cross = document.getElementById('cross');
    const matched = document.getElementById('matched');
    if (pin != typeNumbers) {
        matched.style.display = 'none'
        cross.style.display = 'block'
    }
    else {
        cross.style.display = 'none'
        matched.style.display = 'block'
    };
}


let got = product = 5; const price = '7'; const subTotal = product * price; const tax = subTotal / 10; const total = subTotal + tax;
console.log(total)
