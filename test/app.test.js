var shell = require('shelljs');
var request = require("supertest");
var app = require('../app');

describe('api', () => {
  beforeAll(() => {
    shell.exec('npx sequelize db:create --env test')
  });
  beforeEach(() => {
      shell.exec('npx sequelize db:migrate --env test')
      shell.exec('npx sequelize db:seed:all --env test')
    });
  afterEach(() => {
    shell.exec('npx sequelize db:migrate:undo:all --env test')
  });
});

describe('User Registration', () => {
  it('User Should be Created', () => {
    request(app)
      .post('/users')
      .send('email=wnt', 'password=123')
      .set('Accept', 'application/json')
      .expect(function(res) {
        res.body.apiKey = user.api_key;
        })
      .expect(201);
  });
  });

describe('User Login', () => {
  it('User Should be Logged In', () => {
    request(app)
      .post('/sessions')
      .send('email=wnt', 'password=123')
      .set('Accept', 'application/json')
      .expect(function(res) {
        res.body.apiKey = user.api_key;
        })
      .expect(201);
  });
});

describe('Forecast', () => {
  it('Forecasts Should be Rendered', () => {
    request(app)
      .post('/forecast')
      .send('location=denver')
      .set('Accept', 'application/json')
      .expect(function(res) {
        res.body. = ;
        })
      .expect(200);
  });
});
