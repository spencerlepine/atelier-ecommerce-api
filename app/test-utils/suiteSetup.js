import models from '../models';

// https://stackoverflow.com/questions/60217417/jest-tests-hang-due-to-open-sequelize-connections/60267873#60267873
afterAll(() => models.sequelize.close());

// Note: in my case sequelize is exposed as an attribute of my models module.
