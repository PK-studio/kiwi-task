const assert = require('chai').assert;
const expect = require('chai').expect;
const appLocation = require('../app');

describe('Test for this app: replace number with words', () => {
  let app = null;

  beforeEach( () => {
    app = new appLocation.app();
  })

  describe('Initialization', () => {
    it('It should return object', () => {
      expect(app).to.be.a('object');
    });
  });

  describe('passNumber method', () => {
    it('it should return a number when pass number', () => {
      expect(app.passNumber(10)).to.be.a('number');
    });
    it('it should return null when pass NaN', () => {
      expect(app.passNumber('string')).to.be.null;
    })
    it('it should return null when pass nothing', () => {
      expect(app.passNumber()).to.be.null;
    })
  });

  describe('convertToArray method', ()=>{
    it('it should return arrey of digits', ()=>{
      app.passNumber(789)
      expect(app.converToArray()).to.be.a('array');
    })
  });
})