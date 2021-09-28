module.exports = (sequelize, Sequelize) => {
  const Example = sequelize.define('example', {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Example;
};
