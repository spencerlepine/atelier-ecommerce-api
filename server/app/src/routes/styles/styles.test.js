const request = require('supertest');
const { app } = require('../../index');

const endpoint = '/products';
// ID specified in seeder files
const productId = 987654321;
const url = `${endpoint}/${productId}/styles`;

/* eslint-disable */
describe(`Products Styles ${endpoint}/:product_id/styles`, () => {
  let res;

  beforeAll(async () => {
    res = await request(app).get(url);
  });

  it('should return 200 status code', () => {
    expect(res.statusCode).toEqual(200);
  });

  it('should return object', () => {
    expect(res.body).toBeDefined();
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
    it('should be an array of objects', () => {
      const { results } = res.body;

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

      it('sale price could be null or a string', () => {
        const { results } = res.body;
        expect(results instanceof Array).toBeTruthy();

        results.forEach((styleObj) => {
          const validSalePrice =
            styleObj.sale_price === null ||
            typeof styleObj.sale_price === 'string';
          expect(validSalePrice).toBeTruthy();
        });
      });

      it('should contain valid key/value pairs', () => {
        const { results } = res.body;
        expect(results instanceof Array).toBeTruthy();

        results.forEach((styleObj) => {
          Object.keys(sampleStyleObj).forEach((key) => {
            expect(styleObj).toHaveProperty(key);

            if (key === 'default?' && typeof styleObj[key] === 'boolean') {
              return;
            }

            // Key: 'sale_price' could be NULL or a string
            const constructorA = (!!styleObj[key] || '').constructor;
            const constructorB = (!!sampleStyleObj[key] || '').constructor;

            if (constructorA !== constructorB) {
              console.log(
                `Expected ${constructorA} to be ${constructorB} for [${key}]`
              );
            }
            expect(constructorA === constructorB).toBeTruthy();
          });
        });
      });

      it('should contain valid photos array', () => {
        const samplePhotoObj = {
          thumbnail_url:
            'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        };
        const expression =
          /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi;
        const urlRegex = new RegExp(expression);

        const { results } = res.body;
        results.forEach((styleObj) => {
          const { photos } = styleObj;

          photos.forEach((photoObj) => {
            Object.keys(samplePhotoObj).forEach((key) => {
              expect(photoObj).toHaveProperty(key);
              const matchingType =
                photoObj[key].constructor === samplePhotoObj[key].constructor;
              expect(matchingType).toBeTruthy();

              const validURL = photoObj[key].match(urlRegex);
              expect(validURL).toBeTruthy();
            });
          });
        });
      });

      it('should contain valid sku object', () => {
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

        const { results } = res.body;
        expect(results instanceof Array).toBeTruthy();
        results.forEach((styleObj) => {
          const { skus } = styleObj;

          const validElems = Object.values(skus).every(
            (skuObj) =>
              typeof skuObj.quantity === 'number' &&
              typeof skuObj.size === 'string'
          );
          expect(validElems).toBeTruthy();
        });
      });
    });
  });
});
