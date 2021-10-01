const { product: Products } = require('../models');

const fetchProductById = async (req, res) => {
  try {
    const { product_id: id } = req.params;
    const product = await Products.findByPk(id);
    return res.status(201).json({
      product,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  products: {
    fetchProductById,
  },
};
