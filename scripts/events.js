addButton.addEventListener('click', function(event) {
    const x = Number(xInput.value)
    const y = Number(yInput.value)

    ouputElement.innerHTML = calculator(x, y, add)
    
})

multiplyButton.addEventListener('click', function() {
    const x = Number(xInput.value)
    const y = Number(yInput.value)

    ouputElement.innerHTML = calculator(x, y, multiply)
})
divideButton.addEventListener('click', function () {
    const x = Number(xInput.value)
    const y = Number(yInput.value)

    ouputElement.innerHTML = calculator(x, y, divide)
})
