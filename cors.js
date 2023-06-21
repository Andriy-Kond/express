const express = require('express');

// Для обходу обмежень роботи серверу з одним і тим самим джерелом.
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res, next) => {
  res.json({ message: 'CORS is activated' });
});

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000');
});

// У функцію проміжного ПЗ cors, ми можемо передати аргумент конфігураційний об'єкт з такими властивостями

// origin: Налаштовує заголовок CORS Access-Control-Allow-Origin. Найчастіше це рядок "*" яка дозволяє запит від будь-якого домену. Можливо конкретне значення на кшталт "http://example.com" і будуть дозволені тільки запити з "http://example.com". Можна використовувати регулярний вираз або масив рядків або регулярних виразів, якщо доступ до API можливий з різних доменів

// methods: Налаштовує заголовок CORS Access-Control-Allow-Methods. Очікує рядок з HTTP методами - наприклад, "GET, PUT, POST", можна масив ['GET', 'PUT', 'POST'], яким дозволені міждоменні запити.

// allowedHeaders: Налаштовує заголовок CORS Access-Control-Allow-Headers. Чекає рядок з роздільниками-комами наприклад, "Content-Type, Authorization" або масив ['Content-Type', 'Authorization'] - які заголовки дозволені при запиті.

// exposedHeaders: Налаштовує заголовок CORS Access-Control-Expose-Headers. Керує заголовками користувача.

// credentials: Налаштовує заголовок CORS Access-Control-Allow-Credentials. Встановіть true для передачі заголовка, інакше він не вказується.

// maxAge: Налаштовує заголовок CORS Access-Control-Max-Age. Встановіть ціле число для передачі заголовка, інакше він опускається.

// preflightContinue: Надіслати відповідь попередньої перевірки CORS наступному обробнику.

// optionsSuccessStatus: Надає код стану для використання при успішних OPTIONS запитах, оскільки деякі застарілі браузери (IE11, різні SmartTV) не працюють зі статусом 204.

// Конфігурація за замовчуванням еквівалентна:
// {
//   origin: '*',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   preflightContinue: false,
//   optionsSuccessStatus: 204
// }
