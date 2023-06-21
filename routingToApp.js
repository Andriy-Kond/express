// підключаю модуль routing.js маршрутизації у додаток:

const express = require('express');

const myRouter = require('./routing');

const app = express();

app.use('/contact', myRouter);
// Цей додаток тепер зможе обробляти запити, адресовані ресурсам /contact та /contact/about.

// Express підтримує велику кількість методів маршрутизації, що відповідають методам HTTP. Основні: get, post, put, delete, patch
// Є і особливий метод маршрутизації app.all(). Використовується для завантаження функцій проміжної обробки у дорозі для всіх методів запитів. Буває корисний коли треба реагувати на будь-яке звернення до сервера.

// Обробник буде запущений будь-яких запитів, адресованих /something, незалежно від того, чи використовується GET, POST, PUT, DELETE чи інший метод запиту HTTP, що підтримується модулем http.
app.all('/something', (req, res, next) => {
  console.log('something method.');
  next(); // передаємо управління далі
});

//* Методи відповіді
// Методи в об'єкті відповіді (res) можуть передавати відповідь клієнту та завершувати цикл “запит-відповідь”.
// Якщо жоден із цих методів не буде викликано з обробника маршруту, клієнтський запит зависне.
res.download(); // Запрошення на завантаження файлу
res.end(); // Завершення процесу відповіді
res.json(); // Надсилання відповіді JSON
res.jsonp(); // Надсилання відповіді JSON з підтримкою JSONP
res.redirect(); // Перенаправлення відповіді
res.render(); // Виведення шаблону представлення
res.send(); // Надсилання відповіді різних типів
res.sendFile(); // Надсилання файлу у вигляді потоку відповідей

//* Ланцюжки методів
// Метод app.route() дозволяє створювати обробники маршрутів, що утворюють ланцюжки для конкретного шляху маршруту.
// Коли один шлях для різних методів HTTP, то такий підхід мінімізує надмірність та кількість друкарських помилок
app
  .route('/blog')
  .get((req, res) => {
    res.send('Get a list of blog');
  })
  .post((req, res) => {
    res.send('Add a record to blog');
  })
  .put((req, res) => {
    res.send('Update blog');
  });