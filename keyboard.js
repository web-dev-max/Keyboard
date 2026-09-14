// Экранная клавиатура - логика работы
const output = document.querySelector('#output');
const delButton = document.querySelector('.delete');
const strButtons = document.querySelectorAll('.str');
const spaceButton = document.querySelector('.space');

// Обработчик для буквенных кнопок
strButtons.forEach(button => {
  button.addEventListener('click', () => {
    output.textContent += button.textContent;
  });
});

// Обработчик для пробела
spaceButton.addEventListener('click', () => {
  output.textContent += ' ';
});

// Обработчик для удаления (удаляет последний символ)
delButton.addEventListener('click', () => {
  output.textContent = output.textContent.slice(0, -1);
});