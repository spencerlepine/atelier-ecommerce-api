const {
  style: Styles,
  photos: Photos,
  skus: Skus,
} = require('../../database/models');

const transformSkuList = (sequelizeQueryResult) => {
  try {
    const skusOutput = {};

    sequelizeQueryResult.forEach(({ dataValues }) => {
      const { style_id: id, size, quantity } = dataValues;

      skusOutput[id] = {
        size,
        quantity,
      };
    });

    return skusOutput;
  } catch (err) {
    return {};
  }
};

const fetchStylesById = async (req, res) => {
  const { product_id: id } = req.params;
  Styles.findAll({
    where: { id },
  })
    .then((styleList) => Promise.all(
      styleList.map(({ dataValues: styleObj }) => {
        // Get ALL the photos for this style_id
        const stylePhotosPromise = Photos.findAll({
          where: {
            style_id: styleObj.id,
          },
          attributes: ['thumbnail_url', 'url'],
        });

        // Get ALL the skus for this style_id
        const styleSkusPromise = Skus.findAll({
          where: {
            style_id: styleObj.id,
          },
        });

        return Promise.all([stylePhotosPromise, styleSkusPromise]).then(
          (promiseResults) => {
            const [photos, skus] = promiseResults;

            return {
              ...styleObj,
              style_id: styleObj.id,
              photos: [],
              skus: transformSkuList(skus),
            };
          },
        );
      }),
    ))
    .then((completeStyleList) => {
      res.status(200).json({ product_id: id, results: completeStyleList });
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};

module.exports = {
  fetchStylesById,
};
