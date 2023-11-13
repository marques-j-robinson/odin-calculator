let operationType = null
let firstNumber = ''
let secondNumber = ''
let output
const outputEl = document.querySelector('.output')
const setOutputDisplay = val => {
    output = val
    outputEl.innerHTML = output
}
setOutputDisplay(0)

const errorEl = document.querySelector('.error-message')
const clear = () => {
    errorEl.style.display = 'none'
    setOutputDisplay(0)
    operationType = null
    firstNumber = ''
    secondNumber = ''
}
document.querySelector('.clear').addEventListener('click', clear)

document.querySelector('.equals').addEventListener('click', el => {
    secondNumber = Number(secondNumber)
    operate(operationType, firstNumber, secondNumber)
})

document.querySelectorAll('.op').forEach(el => {
    el.addEventListener('click', e => {
        const {op} = el.dataset
        if (typeof firstNumber === 'string') {
            firstNumber = Number(firstNumber)
        } else if (typeof firstNumber === 'number') {
            operate(operationType, firstNumber, Number(secondNumber))
        }
        operationType = op
    })
})
document.querySelectorAll('.number').forEach(el => {
    el.addEventListener('click', e => {
        if (typeof firstNumber === 'string') {
            firstNumber = `${firstNumber}${String(el.innerHTML)}`
            setOutputDisplay(firstNumber)
        } else {
            secondNumber = `${secondNumber}${String(el.innerHTML)}`
            setOutputDisplay(secondNumber)
        }
    })
})

const operate = (op, a, b) => {
    if (op === 'divide' && b === 0) {
        clear()
        errorEl.style.display = 'block'
    } else {
        errorEl.style.display = 'none'
        setOutputDisplay(round(calc[op](a, b)))
        firstNumber = Number(output)
        secondNumber = ''
    }
}

const calc = {
    add: (a, b) => a+b,
    subtract: (a, b) => a-b,
    multiply: (a, b) => a*b,
    divide: (a, b) => a/b,
}

const round = num => Math.round(num * 100) / 100
