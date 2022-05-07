let box = document.querySelectorAll(".box");
let button = document.querySelector('button');
let number = document.querySelectorAll('[data-number]');

addEventListener('click',(e)=>{
  if(e.target.hasAttribute('data-number')){
    number.forEach((e)=>{
      e.classList.remove('active');
    })
    e.target.classList.add('active');
  }
})

let span = document.querySelector('span');
button.addEventListener('click',()=>{
  let numElement = document.querySelector('.active')
  if(numElement){
    let number = numElement.getAttribute('data-number')
    span.innerText = number;
    box[0].classList.add('hidden')
    box[1].classList.remove('hidden')
  }
})
console.log(document.querySelector('.active'));