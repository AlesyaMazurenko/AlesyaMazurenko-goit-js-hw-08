import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
//const inputEmail = document.querySelector('[name="email"]');
//const inputMessage = document.querySelector('[name="message"]');
let feedbacks = {};

const STORAGE_NAME = "feedback-form-state"
populateMessageOutput()

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

    // - 
    // - Останавливаем поведение по умолчанию
    // - Убираем сообщение из хранилнща
    // - Очищаем форму
function onFormSubmit(evt) {  
    evt.preventDefault();
    console.log('Выводим знечение', feedbacks);
    evt.target.reset();
    localStorage.removeItem(STORAGE_NAME);
}


    // - 
    // - Получаем значение поля,есдт не пустое, парсим его
    // - Сохраняем его в хранилище в виде обькта
    // - Добавить throotlte
function onTextareaInput(evt) { 
    let populateMessage = localStorage.getItem(STORAGE_NAME); 
    populateMessage = populateMessage ? JSON.parse(populateMessage) : {};
    feedbacks[evt.target.name] = evt.target.value;  // данніе записsываются в обьект
    console.log(feedbacks);
    localStorage.setItem(STORAGE_NAME, JSON.stringify(feedbacks));
};

    // - 
    // - Получаем значение из хранилища
    // - Если там что-то бюло, распарсили в js обьект 
    // - обновляем DOM
function populateMessageOutput() {
    let populateMessage = localStorage.getItem(STORAGE_NAME);
    if (populateMessage) {
        populateMessage = JSON.parse(populateMessage);
        
      // -  проверяем вхождения и для каждого вхождения на форме установили значения
        Object.entries(populateMessage).forEach(([name, value]) => {   
            form.elements[name].value = value; 
                // -  запоминаем значения в память то что было в локал.хранилише
            feedbacks[name] = value;
        });
    }
}
