const express = require('express');
const router = express.Router;

const array = [
  { id: 1, name: 'Olga', lastName: 'Petruk' },
  { id: 2, name: 'Vasyl' },
  { id: 3, name: 'Maria' },
];

router.get('/', (req, res, next) => {
  // res.send('GET method');
  res.send(array);
});

// Створення нового запису
router.post('/', (req, res, next) => {
  // console.log(req.body);
  // res.send('POST method');
  const { id, name } = req.body;
  array.push({ id, name });
  res.send(array);
});

router.put('/:id', (req, res, next) => {
  // res.send('PUT method');
  console.log(res.params); // все, що буде після /api/httpMethods: Для /api/httpMethods/3 буде res.params.id === 3
  // або так:
  const { id } = req.params;
  const { name, lastName } = req.body;
  // або так:
  // const {id, name, lastName } = req.body;
  const user = array.find(obj => obj.id === Number.parseInt(id));
  user.name = name;
  user.lastName = lastName;
  res.send(array);
});

router.patch('/:id', (req, res, next) => {
  // res.send('PATCH method');

  const { id, name, lastName } = req.body;
  const user = array.find(obj => obj.id === Number.parseInt(id));
  name && (user.name = name);
  lastName && (user.lastName = lastName);
  res.send(array);
});

router.delete('/:id', (req, res, next) => {
  res.send('DELETE method');
});

module.exports = {
  httpMethodsRouter: router,
};
