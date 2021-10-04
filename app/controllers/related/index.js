const { related: Related } = require('../../database');

const fetchRelatedById = async (req, res) => {
  try {
    const { product_id: id } = req.params;

    const related = await Related.findAll({
      where: {
        current_product_id: id,
      },
    });

    if (related instanceof Array && related.every((e) => e instanceof Object)) {
      const formatted = related.map(
        (relatedObj) => relatedObj.related_product_id,
      );

      return res.status(200).json(formatted);
    }
    throw new Error('Invalid data returned on related query!');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  fetchRelatedById,
};
