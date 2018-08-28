const request = require('supertest');
const app = require('../../app');

describe('index page', () => {
  it('should load', (done) => {
    request(app).get('/').expect(200, done);
  });
});
