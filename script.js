let slidebar = document.getElementById('slidebar')
let numberInput = document.getElementById('numberinput')
let passwordForm = document.getElementById('passwordForm')
let includeUppercase = document.getElementById("uppercase")
let includeLowercase = document.getElementById("lowercase")
let includeNumbers = document.getElementById("includeNumbers")
let includeSymbols = document.getElementById("includeSymbols")
let passDisplay = document.getElementById("display")



// Syncs the password length slide bar and number input
numberinput.addEventListener('input', syncNumBar)
slidebar.addEventListener('input', syncNumBar)

passwordForm.addEventListener('submit', e => {
    e.preventDefault()
    let characterAmount = characterAmountNumber.value
    let includeUppercase = includeUppercaseElement.checked
    let includeNumbers = includeNumbersElement.checked
    let includeSymbols = includeSymbolsElement.checked
    let password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
    passDisplay.innerText = password
  })

function syncNumBar(e) {
    let value = e.target.value
    slidebar.value = value
    numberInput.value = value
}