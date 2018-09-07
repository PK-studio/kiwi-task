const assert = require('chai').assert;
const expect = require('chai').expect;
const appLocation = require('../app');

describe('Test for this app: replace number with words', () => {
  let app = null;
  app = new appLocation.app();

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
    });
    it('each array should contains 3 strings', () => {
      app.groupElements().forEach(element => {
        expect(element).to.be.a('string');
      });
    })
  })

  beforeEach( () => {
    appTest = new appLocation.app();
  })

  describe('matchAndReplaceNumbersWithWords - check all exceptions', () => {
    it('expect to return one for 1', () => {
      expect(app.try(1)).to.equal('one');
    });
    it('expect to return two for 2', () => {
      expect(app.try(2)).to.equal('two');
    });
    it('expect to return three for 3', () => {
      expect(app.try(3)).to.equal('three');
    });
    it('expect to return four for 4', () => {
      expect(app.try(4)).to.equal('four');
    });
    it('expect to return five for 5', () => {
      expect(app.try(5)).to.equal('five');
    });
    it('expect to return six for 6', () => {
      expect(app.try(6)).to.equal('six');
    });
    it('expect to return seven for 7', () => {
      expect(app.try(7)).to.equal('seven');
    });
    it('expect to return eight for 8', () => {
      expect(app.try(8)).to.equal('eight');
    });
    it('expect to return nine for 9', () => {
      expect(app.try(9)).to.equal('nine');
    });
    it('expect to return ten for 10', () => {
      expect(app.try(10)).to.equal('ten');
    });
    it('expect to return eleven for 11', () => {
      expect(app.try(11)).to.equal('eleven');
    });
    it('expect to return twelve for 12', () => {
      expect(app.try(12)).to.equal('twelve');
    });
    it('expect to return thirteen for 13', () => {
      expect(app.try(13)).to.equal('thirteen');
    });
    it('expect to return fourteen for 14', () => {
      expect(app.try(14)).to.equal('fourteen');
    });
    it('expect to return fifteen for 15', () => {
      expect(app.try(15)).to.equal('fifteen');
    });
    it('expect to return sixteen for 16', () => {
      expect(app.try(16)).to.equal('sixteen');
    });
    it('expect to return seventeen for 17', () => {
      expect(app.try(17)).to.equal('seventeen');
    });
    it('expect to return eighteen for 18', () => {
      expect(app.try(18)).to.equal('eighteen');
    });
    it('expect to return nineteen for 19', () => {
      expect(app.try(19)).to.equal('nineteen');
    });
    it('expect to return twenty for 20', () => {
      expect(app.try(20)).to.equal('twenty');
    });
    it('expect to return thirty for 30', () => {
      expect(app.try(30)).to.equal('thirty');
    });
    it('expect to return forty for 40', () => {
      expect(app.try(40)).to.equal('forty');
    });
    it('expect to return fifty for 50', () => {
      expect(app.try(50)).to.equal('fifty');
    });
    it('expect to return sixty for 60', () => {
      expect(app.try(60)).to.equal('sixty');
    });
    it('expect to return seventy for 70', () => {
      expect(app.try(70)).to.equal('seventy');
    });
    it('expect to return eighty for 80', () => {
      expect(app.try(80)).to.equal('eighty');
    });
    it('expect to return ninety for 90', () => {
      expect(app.try(90)).to.equal('ninety');
    });
    it('expect to return "eleven million, one hundred and ten thousand, one hundred and twenty one" for 11110121', () => {
      expect(app.try(11110121)).to.equal('eleven million, one hundred and ten thousand, one hundred and twenty one');
    });
  })
})