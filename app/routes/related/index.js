const { Router } = require('express');
const { related } = require('../../controllers');

const router = Router();

router.get('/:product_id/related', related.fetchRelatedById);

module.exports = router;
