const chai = require("chai");
const Promise = require('bluebird');
const expect = chai.expect;
const supertest = require('supertest');

const db = require('../server/db');
const app = require('../server');
const agent = supertest.agent(app);

describe('GET /api', () => {
  it('responds with 200', () => {
    return agent.get('/memories').expect(200);
  });

});
