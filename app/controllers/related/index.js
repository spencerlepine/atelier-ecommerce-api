const { related: Related } = require('../../database/models');

const fetchRelatedById = async (req, res) => {
  try {
    const { product_id: id } = req.params;
    const styles = await Styles.findAll({
      where: {
        product_id: id,
      },
    });

    return res.status(200).json(styles);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  fetchRelatedById,
};
