// Створення серверу
const express = require('express');
const app = express();

//^ middleware
app.use((req, res, next) => {
  console.log('Наше проміжне ПЗ');
  next();
});
//^ /middleware

//* routes (виклик статики)
app.get('/', (req, res) => res.send('Hello world!')); // На http://localhost:3000/ буде заголовок "Hello world!"
app.get('/contact', (req, res) => {
  res.send('<h1>Contact page</h1>'); // На http://localhost:3000/contact буде заголовок "Contact page"
});

//* /routes

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
