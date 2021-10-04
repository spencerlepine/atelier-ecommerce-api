const { sequelize } = require('./index');

describe('Model Connection', () => {
  it('should connect', (done) => {
    sequelize
      .query('SELECT NOW()')
      .then((res) => {}) // console.log(res))
      .catch((err) => console.error(err.stack))
      .then(done);
  });
});
