module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'skus',
      [
        {
          style_id: 9999999,
          id: 1000001,
          quantity: 14,
          size: '7',
        },
        {
          style_id: 9999999,
          id: 1000002,
          quantity: 25,
          size: '7.5',
        },
        {
          style_id: 9999999,
          id: 1000003,
          quantity: 9,
          size: '8',
        },
        {
          style_id: 9999999,
          id: 1000004,
          quantity: 2,
          size: '8.5',
        },
        {
          style_id: 9999999,
          id: 1000005,
          quantity: 18,
          size: '9',
        },
        {
          style_id: 9999999,
          id: 1000006,
          quantity: 12,
          size: '9.5',
        },
        {
          style_id: 9999999,
          id: 1000007,
          quantity: 10,
          size: '10',
        },
        {
          style_id: 9999999,
          id: 1000008,
          quantity: 18,
          size: '10.5',
        },
        {
          style_id: 9999999,
          id: 1000009,
          quantity: 11,
          size: '11',
        },
        {
          style_id: 9999999,
          id: 1000010,
          quantity: 35,
          size: '11.5',
        },
        {
          style_id: 9999999,
          id: 1000011,
          quantity: 25,
          size: '12',
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('skus', null, {});
  },
};
