const divs = document.querySelectorAll('#myDiv');
const button = document.querySelector('#myButton');
const cartOne = document.querySelector('#cart-one')
const cartTwo = document.querySelector('#cart-two')
const paragraph = document.getElementById('myParagraph');
let activeDivIndex = null; // зберігаємо індекс активного елемента в змінну

divs.forEach((div, index) => {
  div.addEventListener('click', function() {
    // Видаляємо клас 'myClass' з усіх елементів з id 'myDiv'
    divs.forEach(div => {
      div.classList.remove('myClass');
    });
    
    // Додаємо клас 'myClass' до елемента на який натиснули
    this.classList.add('myClass');
    activeDivIndex = index; // зберігаємо індекс активного елемента в змінну
  });
});

button.addEventListener('click', function() {
  if (activeDivIndex !== null) {
    cartOne.classList.add('divNone');
    cartTwo.classList.remove('divNone');
    paragraph.textContent = `You selected ${activeDivIndex + 1} out of 5`;
    console.log(`You selected ${activeDivIndex + 1} out of 5`);
  }
});


