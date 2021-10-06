module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'related',
      [
        {
          id: 1,
          current_product_id: 987654321,
          related_product_id: 8,
        },
        {
          id: 2,
          current_product_id: 987654321,
          related_product_id: 9,
        },
        {
          id: 3,
          current_product_id: 987654321,
          related_product_id: 2,
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('related', null, {});
  },
};
