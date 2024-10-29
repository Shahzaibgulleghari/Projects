let input = [];
let inputValue = document.querySelector('.js-input').value;

let inputButtons =  document.querySelectorAll('.js-input-buttons');


 inputButtons.forEach((button) => {
    button.addEventListener('click', () => {
      let  buttonId = button.id;
      if (buttonId === '=') {
        calculate();
      } else if (buttonId === 'ac') {
        input = [];
        inputValue = document.querySelector('.js-input').value = '';
      } else if (buttonId === 'delete') {
        input.pop()
        inputValue = document.querySelector('.js-input').value = inputValue.slice(0, -1);
      } else {
        input.push(buttonId);
        inputValue = document.querySelector('.js-input').value += buttonId;
      } 
      console.log(input)
    })
 }); 

 let result = 0;
 let value = 0;

 function calculate() {
   let expression = input.join('');
   result = eval(expression);
   console.log(result);
   inputValue = document.querySelector('.js-input').value = result;
 }
