module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'product',
      [
        {
          id: 987654321,
          name: 'Camo Onesie',
          slogan: 'Blend in to your crowd',
          description:
            'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
          category: 'Jackets',
          default_price: 140.0,
          created_at: '1995 10 21',
          updated_at: '1995 10 21',
        },
        {
          id: 987654322,
          name: 'Bright Future Sunglasses',
          slogan: "You've got to wear shades",
          description:
            "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
          category: 'Accessories',
          default_price: 69.0,
          created_at: '1995 10 21',
          updated_at: '1995 10 21',
        },
        {
          id: 987654323,
          name: 'Morning Joggers',
          slogan: 'Make yourself a morning person',
          description:
            "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
          category: 'Pants',
          default_price: 40.0,
          created_at: '1995 10 21',
          updated_at: '1995 10 21',
        },
        {
          id: 987654324,
          name: 'Camo Onesie',
          slogan: 'Blend in to your crowd',
          description:
            'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
          category: 'Jackets',
          default_price: 140.0,
          created_at: '1995 10 21',
          updated_at: '1995 10 21',
        },
        {
          id: 987654325,
          name: 'Camo Onesie',
          slogan: 'Blend in to your crowd',
          description:
            'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
          category: 'Jackets',
          default_price: 140.0,
          created_at: '1995 10 21',
          updated_at: '1995 10 21',
        },
        {
          id: 987654326,
          name: 'Camo Onesie',
          slogan: 'Blend in to your crowd',
          description:
            'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
          category: 'Jackets',
          default_price: 140.0,
          created_at: '1995 10 21',
          updated_at: '1995 10 21',
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('product', null, {});
  },
};
