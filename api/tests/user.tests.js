const supertest = require('supertest');

const db = require('../server/db');
const app = require('../server');
const agent = supertest.agent(app);

describe('user model', () => {
  beforeEach(() => {
    return db.sync({})
      .then(() => {
        console.log('synced the db');
        return;
      });
  });

  describe('Signup', () => {
    it('responds with 200', () => {
      return agent
        .post('/auth/signup')
        .send({
          email: 'john@gmail.com',
          password: '12345'
        })
        .expect(200);
    });

    it('responds with 401 if a user already exists', () => {
      return agent
        .post('/auth/signup')
        .send({
          email: 'john@gmail.com',
          password: '1234566'
        })
        .expect(401);
    });

    it('responds with 400 if a user with no email', () => {
      return agent
        .post('/auth/signup')
        .send({
          password: '1234566'
        })
        .expect(400);
    });
    it('responds with 400 if a user with no password', () => {
      return agent
        .post('/auth/signup')
        .send({
          email: 'alex@gmail.com'
        })
        .expect(400);
    });

  });

  describe('Login', () => {
    it('responds with 200', () => {
      return agent
        .post('/auth/login')
        .send({
          email: 'john@gmail.com',
          password: '12345'
        })
        .expect(200);
    });

    it('responds with 401 if incorrect password', () => {
      return agent
        .post('/auth/login')
        .send({
          email: 'john@gmail.com',
          password: '12344'
        })
        .expect(401);
    });

    it('responds with 401 if a user not found', () => {
      return agent
        .post('/auth/login')
        .send({
          email: 'bruce@gmail.com',
          password: '98765'
        })
        .expect(401);
    });
  });
});

