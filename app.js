require('dotenv').config({ path: `${__dirname}/.env` });
const express = require('express');
const { router } = require('./routes/api');

const app = express();

const defaultPort = 3000;
const port = process.env.PORT || defaultPort;

app.get('/', (req, res) => {
  res.send('Main page');
});

// middleware для створення парсера даних від форм:
app.use(express.urlencoded({ extended: false }));
// У ф-ю передається об'єкт параметрів. Значення {extended: false} вказує, що результатом парсингу будуть пари ключ-значення, а кожне значення може бути представлене у вигляді рядка чи масиву.
// Замість цього можна використати модуль body-parser від express (https://expressjs.com/en/resources/middleware/body-parser.html):
// app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', router);

app.listen(port, () =>
  console.log(`Server running on http://locallhost:${port}`)
);
