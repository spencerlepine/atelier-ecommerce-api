const request = require('supertest');
const { app } = require('../../index');

const endpoint = '/products';
const productId = 1;
const url = `${endpoint}/${productId}/styles`;

describe(`Products Styles ${endpoint}/:product_id/styles`, () => {
  let res;

  beforeAll(async () => {
    res = await request(app).get(url);
  });

  it('should return 200 status code', () => {
    expect(res.statusCode).toEqual(200);
  });

  it('should return object', () => {
    console.log(res.body);
    expect(res.body instanceof Object).toBeTruthy();
  });

  it('should contain "product_id" and "results" keys', () => {
    const { product_id: resultId, results } = res.body;
    expect(resultId).toBeDefined();
    expect(resultId.constructor).toBe(String);
    expect(Number.parseInt(resultId, 10)).toBe(productId);

    expect(results).toBeDefined();
  });

  describe('Styles Results Key', () => {
    const { results } = res.body;

    it('should be an array of objects', () => {
      expect(results instanceof Array).toBeTruthy();

      const validDataTypes = results.every((val) => val instanceof Object);
      expect(validDataTypes).toBeTruthy();
    });

    describe('Style Object', () => {
      const sampleStyleObj = {
        style_id: 253645,
        name: 'White & White',
        original_price: '99.00',
        sale_price: null,
        'default?': true,
        photos: [],
        skus: {},
      };

      results.forEach((styleObj) => {
        it('sale price could be null or a string', () => {
          const validSalePrice = styleObj.sale_price === null || typeof styleObj.sale_price === 'string';
          expect(validSalePrice).toBeTruthy();
        });

        it('objects should contain all valid keys', () => {
          Object.keys(sampleStyleObj).forEach((key) => {
            expect(styleObj).toHaveProperty(key);

            let matchingType = styleObj[key].constructor === sampleStyleObj[key].constructor;
            if (key === 'sale_price') {
              matchingType = (
                styleObj[key] === 'null' || typeof styleObj[key] === 'string'
              );
            }

            expect(matchingType).toBeTruthy();
          });
        });

        describe('Photos Array', () => {
          const { photos } = styleObj;
          const samplePhotoObj = {
            thumbnail_url:
              'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
            url: 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          };
          const expression = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi;
          const urlRegex = new RegExp(expression);

          it('photos array contains valid objects', () => {
            photos.forEach((photoObj) => {
              Object.keys(samplePhotoObj).forEach((key) => {
                expect(photoObj).toHaveProperty(key);
                const matchingType = (
                  photoObj[key].constructor === samplePhotoObj[key].constructor
                );
                expect(matchingType).toBeTruthy();

                const validURL = photoObj[key].match(urlRegex);
                expect(validURL).toBeTruthy();
              });
            });
          });
        });

        describe('Skus Object', () => {
          it('skus objects contains key/value pairs', () => {
            const { skus } = styleObj;
            const sampleSkuObj = {
              1471680: {
                quantity: 14,
                size: '7',
              },
              1471681: {
                quantity: 25,
                size: '7.5',
              },
            };
            console.log('Sku data types');
            console.log(Object.keys(skus).map((e) => typeof e));

            expect(false).toBeTruthy();
          });
        });
      });
    });
  });
});
