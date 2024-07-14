// Находим кнопку и элемент, в который будем выводить сообщение
const button = document.getElementById('myButton');
const message = document.getElementById('message');

// Добавляем обработчик события на кнопку
button.addEventListener('click', () => {
    message.textContent = 'Hello, you clicked the button!';
});
