const request = require('supertest');
const { app } = require('../../index');

const mockProductInfo = {
  id: 42370,
  campus: 'hr-lax',
  name: 'Heir Force Ones',
  slogan: 'A sneaker dynasty',
  description:
    "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
  category: 'Kicks',
  default_price: '99.00',
  created_at: '2021-08-13T14:39:39.968Z',
  updated_at: '2021-08-13T14:39:39.968Z',
  features: [
    {
      feature: 'Sole',
      value: null,
    },
    {
      feature: 'Material',
      value: 'FullControlSkin',
    },
    {
      feature: 'Mid-Sole',
      value: 'ControlSupport Arch Bridge',
    },
    {
      feature: 'Stitching',
      value: 'Double Stitch',
    },
  ],
};

const endpoint = '/products';

describe(`Products API ${endpoint}`, () => {
  describe('/', () => {
    it('should return array', async () => {
      const res = await request(app).get(endpoint);
      expect(res.statusCode).toEqual(200);
      expect(res.body instanceof Array).toBeTruthy();
    });

    it('array should contain objects', async () => {
      const res = await request(app).get(endpoint);
      expect(res.statusCode).toEqual(200);
      expect(res.body.length).toBeGreaterThan(0);

      const validDataTypes = res.body.every((val) => val instanceof Object);
      expect(validDataTypes).toBeTruthy();
    });

    it('should accepts page and count parameters', async () => {
      const sampleCount = 3;
      const res = await request(app)
        .get(endpoint)
        .query({ page: 1, count: sampleCount });

      expect(res.statusCode).toEqual(200);
      expect(res.body.length).toBe(sampleCount);
    });
  });

  describe('/:product_id', () => {
    it('should return individual product info', async () => {
      const productId = 987654321;
      const res = await request(app).get(`${endpoint}/${productId}`);

      expect(res.statusCode).toEqual(200);

      const product = res.body;
      expect(product).toBeDefined();
      expect(product).toHaveProperty('id');
      expect(product.id).toBe(productId);
      expect(product).toHaveProperty('created_at');
      expect(product).toHaveProperty('updated_at');
    });

    it('should have correct data types', async () => {
      const productId = 987654321;
      const res = await request(app).get(`${endpoint}/${productId}`);

      const product = res.body;

      Object.keys(mockProductInfo).forEach((key) => {
        expect(product[key]).toBeDefined();
        expect(product[key].constructor).toBe(mockProductInfo[key].constructor);
      });

      product.features.forEach((featureObj) => {
        expect(featureObj.feature).toBeDefined();
        expect(featureObj.feature.constructor).toBe(String);

        expect(featureObj.value).toBeDefined();
        const validValue = featureObj.value === null || typeof featureObj.value === 'string';
        expect(validValue).toBeTruthy();
      });
    });
  });
});
