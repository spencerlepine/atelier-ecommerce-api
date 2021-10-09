const { style: Styles, photos: Photos, skus: Skus } = require('../../database');

const fetchStylesById = async (req, res) => {
  const { product_id: productId } = req.params;

  Styles.findAll({
    where: { product_id: productId },
    attributes: [
      ['id', 'style_id'],
      'name',
      'original_price',
      'sale_price',
      'default?',
    ],
    include: [
      {
        model: Photos,
        as: 'photos',
        where: {},
        attributes: { exclude: ['id', 'style_id'] },
        separate: true,
      },
      {
        model: Skus,
        as: 'skus',
        where: {},
        attributes: { exclude: ['id', 'style_id'] },
        separate: true,
      },
    ],
    raw: false,
    plain: false,
    hasJoin: true,
    nest: true,
  })
    .then((completeStyleList) => {
      res.status(200).json({
        product_id: `${req.params.product_id}`,
        results: completeStyleList,
      });
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};

module.exports = {
  fetchStylesById,
};
