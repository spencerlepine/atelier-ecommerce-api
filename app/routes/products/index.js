const { Router } = require('express');
const { products } = require('../../controllers');

const router = Router();

router.get('/:product_id', products.fetchProduct);

module.exports = router;
