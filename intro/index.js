const result = document.querySelector('#count-display');
const button = document.querySelector('#increment-btn');

console.log(result, button)

button.addEventListener('click', ()=>{
    result.innerHTML = parseInt(result.innerHTML) + 1
})
