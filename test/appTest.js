const assert = require('chai').assert;
const expect = require('chai').expect;
const appLocation = require('../app');

describe('Test for this app: replace number with words', () => {
  let app = null;
  app = new appLocation.app();

  // beforeEach( () => {
  //   app = new appLocation.app();
  // })

  describe('Initialization', () => {
    it('It should return object', () => {
      expect(app).to.be.a('object');
    });
  });

  describe('passNumber method', () => {
    it('it should return null when pass NaN', () => {
      expect(app.passNumber('string')).to.be.null;
    })
    it('it should return null when pass nothing', () => {
      expect(app.passNumber()).to.be.null;
    })
    it('it should return a number when pass number', () => {
      expect(app.passNumber(10)).to.be.a('number');
    });
  });

  describe('convertToArray method', ()=>{
    it('it always should return arrey of 9 elements', ()=>{
      expect(app.converToArray().length).to.equal(9);
    })
  });

  describe('groupElements method', () => {
    it('expect to return 3 arrays', () => {
      expect(app.groupElements().length).to.equal(3);
    });
    it('each array should contains 3 elements', () => {
      app.groupElements().forEach(element => {
        expect(element.length).to.equal(3);
      });
    })
  })
})