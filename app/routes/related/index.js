const { Router } = require('express');
const { related } = require('../../controllers');

const router = Router();

router.get('/:product_id/related', styles.fetchRelatedById);

module.exports = router;
