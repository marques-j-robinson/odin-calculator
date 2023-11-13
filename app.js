const calc = {
    add: (a, b) => a+b,
    subtract: (a, b) => a-b,
    multiply: (a, b) => a*b,
    divide: (a, b) => a/b,
}

let output = 0
let operationType
let firstNumber
let secondNumber

const outputEl = document.querySelector('.output')
outputEl.innerHTML = output
document.querySelectorAll('.op').forEach(el => {
    el.addEventListener('click', e => {
        const {op} = el.dataset
        console.log(op)
    })
})

const operate = (op, a, b) => {
    output = calc[op](a, b)
    outputEl.innerHTML = output
}
