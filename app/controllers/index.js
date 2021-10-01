const { product: Products } = require('../database/models');

const fetchProductById = async (req, res) => {
  try {
    const { product_id: id } = req.params;
    const product = await Products.findByPk(id);

    // Transform the time stamp keys to snake case
    if (product.dataValues.created_at === undefined) {
      product.dataValues.created_at = product.dataValues.createdAt;
      product.dataValues.updated_at = product.dataValues.updatedAt;
    }

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const fetchProductsByPage = (req, res) => {
  const { page, count } = req.query;
  const startingPage = page || 1;
  const perPageCount = count || 5;

  Products.findAll({
    offset: startingPage,
    limit: perPageCount,
    order: [['id', 'ASC']],
  }).then((productList) => {
    if (productList && productList.length) {
      res.status(200).json(productList);
    }
  });
};

module.exports = {
  products: {
    fetchProductById,
    fetchProductsByPage,
  },
};
