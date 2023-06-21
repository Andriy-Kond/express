//* Передача даних на сервер
// Є 5 способів: через передачу параметру у URL(contact/:id), через адресний рядок після знаку ?, за допомогою форм, через JSON (XML - старий), через токен.
//~ Через URL(contact/:id)
// .../contact/123
app.get('/contact/:id', (req, res) => {
  res.send(`<h1>Contact</h1> Параметр: ${req.params.id}`); // req.params.id === 123
});

// .../contact/123
app.patch('/user/:userID', (req, res) => {
  const id = req.params.userID; // req.params.userID === 123
});

//~ Через адресний рядок після знаку ?
// розбір рядка GET запиту:
// http://localhost:3000/contacts?skip=0&limit=10
console.log(req.query); // { skip: 0, limit: 10 }

// Якщо у GET запиті HTTP параметри рядка запиту не задані, а знака питання і після нього нічого немає:
// http://localhost:3000/contacts
console.log(req.query); // {}

//~ За допомогою форм
// Запит POST від форми стандартно має заголовок Content-Type: application/x-www-form-urlencoded.
// Спочатку треба розібрати дані (зробити парсінг) через middleware
// Для створення парсера даних від форм застосовується функція urlencoded().
app.use(express.urlencoded({ extended: false }));
// У ф-ю передається об'єкт параметрів. Значення {extended: false} вказує, що результатом парсингу будуть пари ключ-значення, а кожне значення може бути представлене у вигляді рядка чи масиву.
// При {extended: true} парсер використовує іншу бібліотеку для розбору формату рядка.

// Нехай ми приймаємо інформацію від форми аутентифікації.
// <form action="/login" method="POST">  // на .../login буде відправлено змінні email та password
//   <label for="email">Email</label>
//   <input type="text" name="email" id="email" />  // name="email" - робить змінну email
//   <label for="password">Пароль</label>
//   <input type="password" name="password" id="password" />  // name="password" - робить змінну password
//   <button type="submit">Увійти</button>
// </form>

// Ці дані (змінні email та password) ми повинні прийняти на стороні сервера наступним обробником:
app.post('/login', (req, res, next) => {
  const { email, password } = req.body;
});
// В результаті req.body === {
// email: 'Значення, введене у поле input',
// password: 'Значення, введене у поле input' }

//~ через JSON
// Передати дані у вигляді JSON, можна клієнтським JavaScript, утилітою curl для linux систем, або Postman

// Підключення парсеру JSON
app.use(express.json());

// Після підключення парсеру обробники запитів можуть інтерпретувати значення req.body як об'єкт JavaScript замість рядка:
app.post('/login', (req, res, next) => {
  const { email, password } = req.body;
});
// Цей приклад припускає, що надіслано об'єкт JSON з властивостями email та password. А у запиту заголовок Content-Type === application/json. Має бути надіслана дійсна розмітка JSON.

//~ Через токен
