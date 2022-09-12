const btn = document.querySelector('.btn')
const result = document.querySelector('.result')
const input = document.querySelector('.input-text')

btn.addEventListener('click', palindrome)


function palindrome() {
    const currentStr = input.value.toUpperCase()
    const reverseStr = input.value.split('').reverse().join('').toUpperCase()
    if (currentStr === reverseStr) {
        result.innerHTML = `${currentStr} is a Palindrome`
    } else {
        result.innerHTML = `${currentStr} is <span style='color: red'>NOT</span> a Palindrom`
    }
}