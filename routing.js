//* Методи Route
// За допомогою класу express.Router можна створювати обробники маршрутів.
// Екземпляр Router є комплексною системою проміжних обробників та маршрутизації; тому його часто називають «міні - додатком».

const express = require('express');
const router = express.Router();

// визначимо домашній роутер
router.get('/', (req, res) => {
  res.send('Це головний роутер');
});

// визначимо роутер about
router.get('/about', (req, res) => {
  res.send('About');
});

module.exports = router; // приймаємо у routingToApp.js
