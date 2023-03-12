import validateForm from './validate.js'

const sendButton = document.querySelector('.send-row-button');
sendButton.addEventListener('click', () => {
  if (validateForm()) {
    const inputs = document.querySelectorAll('.content input[type="text"], .content input[type="number"], .content select');
    const data = {};

    // Сбор данных из формы в объект data
    inputs.forEach((input) => {
      data[input.name] = input.value;
    });

    // Преобразование объекта в JSON и вывод в консоль
    console.log(JSON.stringify(data));
  }
});

export default {sendButton}
