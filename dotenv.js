// require('dotenv').config(); // Запис змінних з оточення (з файлу .env) у об'єкт process.env
require('dotenv').config({ path: `${__dirname}/.env` }); // краще так, бо на linux не спрацює без __dirname
const express = require('express');
const { router } = require('./routers/api');

const app = express();

process.env.SECRET_KEY; // === 123456
process.env.NODE_ENV; // === development

const defaultPort = 3000;
const port = process.env.PORT || defaultPort;

app.get('/', (req, res) => res.send('Main page'));

app.use('/api', router);

app.listen(port, () =>
  console.log(`Server running on http://locallhost:${port}`)
);
