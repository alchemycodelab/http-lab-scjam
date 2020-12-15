const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('should GET plain text hi', async() => {
    const response = await request(app)
      .get('/');

    expect(response.text).toEqual('hi');
  });

  it('should POST status code 200 and plain text', async() => {
    const response = await request(app)
      .post('/echo')
      .send('hi');

    expect(response.text).toEqual('hi');
  });
});
