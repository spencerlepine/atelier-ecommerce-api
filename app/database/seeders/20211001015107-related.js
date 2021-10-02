module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'related',
      [
        {
          id: 987654321,
          current_product_id: 1,
          related_product_id: 8,
        },
        {
          id: 987654322,
          current_product_id: 1,
          related_product_id: 9,
        },
        {
          id: 987654323,
          current_product_id: 1,
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
