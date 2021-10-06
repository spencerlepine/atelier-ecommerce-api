const { Router } = require('express');
const { styles } = require('../../controllers');

const router = Router();

router.get('/:product_id/styles', styles.fetchStylesById);

module.exports = router;
