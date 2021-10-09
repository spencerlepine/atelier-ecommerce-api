const { product: Products, features: Features } = require('../../database');

const transformProductObj = (productObj) => {
  const newProduct = { ...(productObj.dataValues || {}) };

  if (newProduct.created_at === undefined) {
    newProduct.created_at = newProduct.createdAt;
    newProduct.updated_at = newProduct.updatedAt;
    delete newProduct.createdAt;
    delete newProduct.updatedAt;
  }
  newProduct.campus = 'hr-lax';
  newProduct.default_price = parseFloat(newProduct.default_price)
    .toFixed(2)
    .toString();

  return newProduct;
};

const transformFeaturesObj = (featuresObj) => {
  try {
    const features = featuresObj.map((e) => e.dataValues);
    const mapped = features.map(({ value, feature }) => ({ value, feature }));
    return mapped;
  } catch (err) {
    return [];
  }
};

const fetchProductById = async (req, res) => {
  try {
    const { product_id: id } = req.params;
    const product = await Products.findByPk(id);

    const features = await Features.findAll({
      where: {
        product_id: id,
      },
    });
    const featuresArr = transformFeaturesObj(features);

    const transformed = {
      features: featuresArr,
      ...transformProductObj(product),
    };
    return res.status(200).json(transformed);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const fetchProductsByPage = (req, res) => {
  const { page, count } = req.query;
  const startingPage = page || 1;
  const perPageCount = count || 5;

  // Check for valid parameters HERE
  // if (startingPage < 1 || perPageCount < 1 || typeof startingPage !== 'number'
  // || typeof perPageCount !== 'number') {
  //   console.log(startingPage, perPageCount);
  //   return res.status(500).json({ error: 'count and page params must be valid integers' });
  // }

  Products.findAll({
    offset: (startingPage - 1) * perPageCount,
    limit: perPageCount,
    order: [['id', 'ASC']],
  })
    .then((productList) => {
      if (productList && productList.length) {
        res.status(200).json(productList);
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = {
  fetchProductById,
  fetchProductsByPage,
};
