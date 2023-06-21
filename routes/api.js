const express = require('express');
const router = express.Router;

const { httpMethodsRouter } = require('./httpMethods');
const { symbolsRoute } = require('./symbols');

router.use('/http-methods', httpMethodsRouter);
router.use('symbols', symbolsRoute);

module.exports = {
  router,
};
