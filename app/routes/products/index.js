const { Router } = require('express');
const { products } = require('../../controllers');

const router = Router();

router.get('/:product_id', products.fetchProductById);
router.get('/', products.fetchProductsByPage);

module.exports = router;
