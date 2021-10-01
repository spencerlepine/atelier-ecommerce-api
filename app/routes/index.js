const { Router } = require('express');
const controllers = require('../controllers');
const products = require('./products');

const router = Router();

router.use('/products', products);

router.get('/', (req, res) => res.send('This is root!'));

module.exports = router;
