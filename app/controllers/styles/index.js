const { style: Styles } = require('../../database/models');

const fetchStylesById = async (req, res) => {
  try {
    const { product_id: id } = req.params;
    const styles = await Styles.findAll({
      where: {
        id,
      },
    });

    console.log(styles[0].dataValues['default?']);
    console.log(styles[0].dataValues['default?']);
    console.log(styles[0].dataValues['default?'].toString());

    return res.status(200).json({ product_id: id, results: styles });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  fetchStylesById,
};
