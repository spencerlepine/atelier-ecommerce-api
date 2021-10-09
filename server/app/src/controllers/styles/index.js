const { style: Styles, photos: Photos, skus: Skus } = require('../../database');

const fetchStylesById = async (req, res) => {
  const { product_id: id } = req.params;

  Styles.findAll({
    where: { id },
    attributes: { exclude: ['id'] },
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
      // Convert the 'default?' key to a boolean
      const obj = completeStyleList[0].dataValues;
      const defaultBool = !!completeStyleList[0].dataValues['default?'];
      obj['default?'] = defaultBool;
      res.status(200).json(obj);
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};

module.exports = {
  fetchStylesById,
};
