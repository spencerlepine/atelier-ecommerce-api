const request = require('supertest');
const { app } = require('../../index');

const productId = 987654321;
const endpoint = '/products';
const url = `${endpoint}/${productId}/related`;

const mockRelatedProducts = [42371, 42371, 42373, 42374, 42366, 42368];

describe(`Related API ${endpoint}/:product_id/related`, () => {
  let res;

  beforeAll(async () => {
    res = await request(app).get(url);
  });

  it('should return 200 status code', () => {
    expect(res.statusCode).toEqual(200);
  });

  it('should return array of integers', () => {
    expect(res.body instanceof Array).toBeTruthy();
    const validDataTypes = res.body
      .map((e) => e.constructor)
      .every((e) => e === Number);
    expect(validDataTypes).toBeTruthy();
  });
});
