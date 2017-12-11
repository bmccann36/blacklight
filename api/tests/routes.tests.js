const chai = require("chai");
const Promise = require('bluebird');
const expect = chai.expect;
const supertest = require('supertest');

const db = require('../server/db');
const app = require('../server');
const agent = supertest.agent(app);

describe('GET all memories', () => {
  it('responds with 200', () => {
    return agent.get('/api/memories').expect(200);
  });
});

describe('POST a memory', () => {
  it('responds with 200', () => {
    return agent
      .post('/api/memories')
      .send({
        title: 'Test Title',
        text: 'Hello from Mars',
        lat: 100,
        lng: -100
      })
      .expect(200);
  });
});

describe('GET /memories/:memoryId', () => {
  it('responds with 404 if a memory does not exist', () => {
    return agent.get('/api/memories/20').expect(404);
  });

  it('responds with 200 if a memory exists', () => {
    return agent.get('/api/memories/1').expect(200);
  });

});




