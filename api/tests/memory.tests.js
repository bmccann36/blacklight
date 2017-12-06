const chai = require("chai");
const Promise = require('bluebird');
const expect = chai.expect;
const db = require('../server/db');
const Memory = require('../server/db/models').Memory;

describe("memory model", () => {
  beforeEach(() => {
    return db.sync({ force: true })
      .then(() => {
        console.log("synced the db")
        return;
      })
  });

  describe('create memory', () => {

    let memory;
    beforeEach(() => {
      memory = Memory.build({
        title: 'Geese',
        text: 'Saw fat geese',
        lng: 70,
        lat: -47
      });
    });

    it('saves title', () => {
      expect(memory.title).to.equal('Geese');
    });

    it('saves title', () => {
      expect(memory.text).to.equal('Saw fat geese');
    });
  });

  describe('rejects empty entries', () => {
    let mem1, mem2, mem3;
    beforeEach(() => {
      const m1 = Memory.build({
        title: undefined,
        text: 'Some random memory text',
        lng: 50,
        lat: -55
      });

      const m2 = Memory.build({
        title: 'Memory Title',
        text: 'Some random memory text',
        lng: undefined,
        lat: -55
      });

      const m3 = Memory.build({
        title: 'Memory Title',
        text: 'Some random memory text',
        lng: 70,
        lat: undefined
      });

      return Promise.all([m1, m2, m3]).then(createdMemories => {
        [mem1, mem2, mem3] = createdMemories;
      });
    });

    it('rejects empty title', (done) => {
      mem1.validate()
      .catch(err => {
        expect(err).to.exist;
        done();
      });
    });

    it('rejects empty longitude', (done) => {
      mem2.validate()
      .catch(err => {
        expect(err).to.exist;
        done();
      });
    });

    it('rejects empty latitude', (done) => {
      mem2.validate()
      .catch(err => {
        expect(err).to.exist;
        done();
      });
    });
  });

})
