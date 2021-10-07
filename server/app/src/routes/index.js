const { Router } = require('express');
const controllers = require('../controllers');
const products = require('./products');
const styles = require('./styles');
const related = require('./related');
// const reviewsMeta = require('./reviewsMeta');

const router = Router();

router.use('/products', products);
router.use('/products', styles);
router.use('/products', related);
// router.use('/reviews/meta', reviewsMeta);

router.get('/', (req, res) => res.send('This is root!'));

module.exports = router;
