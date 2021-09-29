const {
  sequelize,
  dataTypes,
  checkModelName,
  checkUniqueIndex,
  checkPropertyExists,
  checkNonUniqueIndex,
} = require('sequelize-test-helpers');

const PhotosModel = require('./photos.model');

const expectedFields = ['id', 'style_id', 'thumbnail_url', 'url'];

describe('Photos Model', () => {
  const Photos = PhotosModel(sequelize, dataTypes);
  const photos = new Photos();

  checkModelName(Photos)('photos');

  describe('should contain expected properties', () => {
    expectedFields.forEach(checkPropertyExists(photos));
  });
});
