const { style: Styles, photos: Photos, skus: Skus } = require('../../database');

const transformSkuList = (sequelizeQueryResult) => {
  try {
    return sequelizeQueryResult
      .map((e) => e.dataValues)
      .reduce(
        (outputObj, { size, quantity, id }) => ({
          ...outputObj,
          [id]: { size, quantity },
        }),
        {},
      );
  } catch (err) {
    console.log(err);
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
        console.log(styleObj.id);

        return Promise.all([stylePhotosPromise, styleSkusPromise]).then(
          (promiseResults) => {
            const [photos, skus] = promiseResults;
            const transformedPhotos = photos.map((e) => e.dataValues);

            return {
              ...styleObj,
              'default?': !!styleObj['default?'],
              style_id: styleObj.id,
              photos: transformedPhotos,
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
