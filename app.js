const form = document.getElementById('form')
const input = document.getElementById('input')
const inputText = document.getElementById('input-txt')
const button = document.getElementById('btn')
const resultContainer = document.querySelector('.result')
const resultList = document.querySelector('.result-list')

  

button.addEventListener('click', e => {
    e.preventDefault()
    let result = input.value * 2.54
    resultList.innerHTML += `<li>${inputText.value} = ${result.toFixed(2)}</li>`
    
})