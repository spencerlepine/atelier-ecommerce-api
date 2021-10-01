const request = require('supertest');
const { app } = require('../../index');

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
      const productId = 1;
      const res = await request(app).get(`${endpoint}/${productId}`);

      expect(res.statusCode).toEqual(200);

      const product = res.body;
      expect(product).toBeDefined();
      expect(product).toHaveProperty('id');
      expect(product.id).toBe(productId);
      expect(product).toHaveProperty('created_at');
      expect(product).toHaveProperty('updated_at');
    });
  });
});
