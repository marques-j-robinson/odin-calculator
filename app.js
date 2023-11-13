const calc = {
    add: (a, b) => a+b,
    subtract: (a, b) => a-b,
    multiply: (a, b) => a*b,
    divide: (a, b) => a/b,
}

let operationType
let firstNumber
let secondNumber

document.querySelectorAll('.op').forEach(el => {
    el.addEventListener('click', e => {
        const {op} = el.dataset
        console.log(op)
    })
})
