const chai = require("chai");
const Promise = require('bluebird')
const expect = chai.expect;
const db = require('../db/db')

const Memory = require('../db/models').Memory


describe("page model", (done) => {
  beforeEach(() => {
    return db.sync({ force: true })
      .then(() => {
        console.log("synced the db")
        return;
      })
  });

  let page;
  beforeEach(() => {
    memory = Memory.build({
      title: 'Geese',
      text: 'Geese',
      lng: 5,
      lat: 5
    })
  });

  // describe('route', () => {
  //   it('returns url title prepended by /wiki/', () => {
  //     expect(page.route).to.equal('/wiki/Geese')
  //   })
  // });

  // describe('rendered content', () => {
  //   it('takes markdown content and converts to HTML', () => {
  //     expect(page.renderedContent).to.equal('<p>sharp tongues</p>\n')
  //   })
  // })

})
