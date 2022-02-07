const result = document.querySelector('#count-display');
const button = document.querySelector('#increment-btn');

console.log(result, button)

button.addEventListener('click', ()=>{
    result.innerHTML = parseInt(result.innerHTML) + 1
})



const result2 = document.querySelector('#count-display2');
const button2 = document.querySelector('#increment-btn2');

console.log(result2, button2)

button2.addEventListener('click', ()=>{
    result2.innerHTML = parseInt(result2.innerHTML) + 1
})
