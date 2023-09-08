class Calculator {
    constructor(primeryOperandDisplay,
        secondaryOperandDisplay,
        operationDisplay) {
        this.#primeryOperandDisplay = primeryOperandDisplay;
        this.#secondaryOperandDisplay = secondaryOperandDisplay;
        this.#operationDisplay = operationDisplay
        this.clear()
    }
    #primeryOperandDisplay
    #secondaryOperandDisplay
    #operationDisplay

    get primeryOperand() {
        return parseFloat(this.#primeryOperandDisplay.dataset.value)
    }
    set primeryOperand(value) {
        this.#primeryOperandDisplay.dataset.value = value ?? ''
        this.#primeryOperandDisplay.textContent = displayNumber(value)
    }
    get secondaryOperand() {
        return parseFloat(this.#secondaryOperandDisplay.dataset.value)
    }
    set secondaryOperand(value) {
        this.#secondaryOperandDisplay.dataset.value = value ?? '';
        this.#secondaryOperandDisplay.textContent = displayNumber(value)
    }
    get operation() {
        return this.#operationDisplay.textContent
    }
    set operation(value) {
        this.#operationDisplay.textContent = value ?? '';
    }

    addDigit(e) {
        if (e === '.' &&
            this.#primeryOperandDisplay.dataset.value.includes('.')) {
            return
        }
        if (this.#primeryOperandDisplay.dataset.result) {
            this.#primeryOperandDisplay.dataset.result = ''
            this.primeryOperand = e
            return
        }
        if (this.primeryOperand === 0) {
            this.primeryOperand = e
            return
        }
        this.primeryOperand =
            this.#primeryOperandDisplay.dataset.value + e;
    }

    evaluate() {
        let result;
        switch (this.operation) {
            case 'x':
            case '*':
                result = this.secondaryOperand * this.primeryOperand;
                break
            case '÷':
                result = this.secondaryOperand / this.primeryOperand
                break
            case '+':
                result = this.secondaryOperand + this.primeryOperand
                break
            case '-':
                result = this.secondaryOperand - this.primeryOperand
                break
            default: return
        }
        this.clear()
        this.primeryOperand = result
        return result

    }
    finish() {
        this.#primeryOperandDisplay.dataset.result = true
    }

    chooseOperation(operation) {
        if (this.operation) {
            this.evaluate()
        }
        this.secondaryOperand = this.primeryOperand
        this.primeryOperand = 0;
        this.operation = operation

    }

    removeDigit() {
        if (this.#primeryOperandDisplay.dataset.value.length <= 1) {
            this.primeryOperand = 0
            return
        }
        this.primeryOperand =
            this.#primeryOperandDisplay.dataset.value.slice(0, -1)
    }

    clear() {
        this.secondaryOperand = null
        this.operation = null
        this.primeryOperand = 0;
        this.#primeryOperandDisplay.dataset.result = ''
    }
}

const NUMBER_FORMATTER = new Intl.NumberFormat('en')
function displayNumber(number) {
    const stringNumber = number?.toString() || '';
    if (stringNumber === '') return '';
    const [integer, decimal] = stringNumber.split('.');
    const formattedInteger = NUMBER_FORMATTER.format(integer);
    if (decimal == null) return formattedInteger
    return formattedInteger + '.' + decimal.slice(0, 7)
}



//Actions
//1.Click a number----
//2.Click clear button---
//3.Click delete----
//4.Click an operation----
//5.Click the period button----
//6.Click equals-----

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const secondaryOperandDisplay = document.querySelector(
    '[data-previous-operand]')
const primeryOperandDisplay = document.querySelector(
    '[data-current-operand]')
const operationDisplay = document.querySelector('[data-operation]')



const calculator = new Calculator(
    primeryOperandDisplay,
    secondaryOperandDisplay,
    operationDisplay
)


document.addEventListener('click', e => {
    e.preventDefault()
    if (e.target.matches('[data-all-clear]')) {
        calculator.clear()
    }
    if (e.target.matches('[data-number]')) {
        calculator.addDigit(e.target.textContent)
    }
    if (e.target.matches('[data-delete]')) {
        calculator.removeDigit()
    }
    if (e.target.matches('[data-operation]')) {
        calculator.chooseOperation(e.target.textContent)
    }
    if (e.target.matches('[data-equals]')) {
        calculator.evaluate()
        calculator.finish()
    }
})

document.addEventListener('keydown', e => {
    e.preventDefault()
    //Check if a number key was pressed
    if ((+e.key >= 0 && +e.key <= 9) || e.key === '.') {
        calculator.addDigit(e.key)
    }
    if (e.key === 'c' || e.key === 'Escape') {
        calculator.clear()
    }
    if (e.key === 'Backspace') {
        calculator.removeDigit()
    }
    if (e.key === 'Enter' || e.key === '=') {
        calculator.evaluate()
        calculator.finish()
    }
    if (['*', '/', '-', '+', 'x'].includes(e.key)) {
        calculator.chooseOperation(e.key)
    }
})




const backgroundChange = document.querySelector('.white')
document.querySelector('#power').addEventListener('click', power)


// On page load set localStorage
localStorage.setItem('onOff', 0)

function power() {
    
    if (localStorage.getItem('onOff') == 1) {
       
        backgroundChange.style.backgroundColor = "rgb(252, 248, 248)"
        
        
        
        document.querySelector('.n1').disabled =  false
        document.querySelector('.n2').disabled =  false
        document.querySelector('.n3').disabled =  false
        document.querySelector('.n4').disabled =  false
        document.querySelector('.n5').disabled =  false
        document.querySelector('.n6').disabled =  false
        document.querySelector('.n7').disabled =  false
        document.querySelector('.n8').disabled =  false
        document.querySelector('.n9').disabled =  false
        document.querySelector('.n10').disabled =  false
        document.querySelector('.n11').disabled =  false
        document.querySelector('.n12').disabled =  false
        document.querySelector('.n13').disabled =  false
        document.querySelector('.n14').disabled =  false
        document.querySelector('.n15').disabled =  false
        document.querySelector('.n16').disabled =  false
        
        
        document.querySelector('.output').style.backgroundColor =  "rgb(252, 248, 248)"
        
        localStorage.setItem('onOff', 0)
        
        // alert('Calculator is loading.....')
        
    } else if (localStorage.getItem('onOff') == 0) {
        // alert('Calculator is shuting down now')
         
       
    
        document.querySelector('.n1').disabled =  true
        document.querySelector('.n2').disabled =  true
        document.querySelector('.n3').disabled =  true
        document.querySelector('.n4').disabled =  true
        document.querySelector('.n5').disabled =  true
        document.querySelector('.n6').disabled =  true
        document.querySelector('.n7').disabled =  true
        document.querySelector('.n8').disabled =  true
        document.querySelector('.n9').disabled =  true
        document.querySelector('.n10').disabled =  true
        document.querySelector('.n11').disabled =  true
        document.querySelector('.n12').disabled =  true
        document.querySelector('.n13').disabled =  true
        document.querySelector('.n14').disabled =  true
        document.querySelector('.n15').disabled =  true
        document.querySelector('.n16').disabled =  true
        
    

        document.querySelector('.output').style.height =  "100px"
        document.querySelector('.output').style.backgroundColor =  "rgb(0, 0, 0)"
    
        localStorage.setItem('onOff', 1);
    }
} 