const request = require('supertest');
const { app } = require('../../index');

const endpoint = '/products';

describe('Products API', () => {
  // it('should show all products', async () => {
  //   const res = await request(app).get(endpoint);
  //   expect(res.statusCode).toEqual(200);
  //   expect(res.body).toHaveProperty('product');
  // });

  it('/:product_id should return individual product info', async () => {
    const productId = 1;
    const res = await request(app).get(`${endpoint}/${productId}`);

    expect(res.statusCode).toEqual(201);

    const product = res.body;
    expect(product).toBeDefined();
    expect(product).toHaveProperty('id');
    expect(product.id).toBe(productId);
    expect(product).toHaveProperty('created_at');
    expect(product).toHaveProperty('updated_at');
  });
});
