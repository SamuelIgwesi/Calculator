"use strict";
const buttons = Array.from(document.querySelectorAll('button'));
// const operators = document.querySelectorAll('.data-operation');
const output = document.querySelector('#output');

buttons.map(button => {
  button.addEventListener('click', (e) => {
    switch(e.target.innerText){
      case 'AC':
         output.innerText = '';
          break;
      case 'DEL':
          if (output.innerText) {
            output.innerText = output.innerText.slice(0, -1)
          }
          break;
      case '=':
          try{
            output.innerText = eval(output.innerText);
          } catch {
            output.innerText = "Error!";
          }
          break;
      default:output.innerText += e.target.innerText;
    }
  })
})
// const display = function(){
// 	output.innerHTML = numbers.currentTarget.innerHTML;
// 	// document.getElementById(output).innerHTML = numbers;
// }

// const num = [...numbers]
// for (let i = 0; i < numbers.length; i++){ 
//   numbers[i].addEventListener('click',function() {
//   	output.innerHTML = numbers[i].innerHTML;
//     output.innerHTML = numbers[i].innerHTML});

// }
