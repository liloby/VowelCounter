const btn = document.querySelector('.btn')
const result = document.querySelector('.result')
const input = document.querySelector('.input-text')

btn.addEventListener('click', vowel)


function vowel() {
    const vowel = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    input.value.split('').forEach(letter => {
        if (vowel.includes(letter)) {
            count++
        }
    })
    if (count === 0) {
        result.innerHTML = `${input.value.toUpperCase()} has <span style='color: red'>no</span> vowels`
    } else {
        result.innerHTML = `${input.value.toUpperCase()} has ${count} vowels`
    }
    result.classList.add('animate')
    setTimeout(() => {
        result.classList.remove('animate')
    }, 4000)
}