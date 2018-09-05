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

  describe('matchAndReplaceNumbersWithWords - check all exceptions', () => {
    const thisFun = app.matchAndReplaceNumbersWithWords;
    it('expect to return one for 1', () => {
      app.passNumber(1);
      describe(thisFun()).to.equal('one');
    });
    it('expect to return two for 2', () => {
      app.passNumber(2);
      describe(thisFun()).to.equal('two');
    });
    it('expect to return three for 3', () => {
      app.passNumber(3);
      describe(thisFun()).to.equal('three');
    });
    it('expect to return four for 4', () => {
      app.passNumber(4);
      describe(thisFun()).to.equal('four');
    });
    it('expect to return five for 5', () => {
      app.passNumber(5);
      describe(thisFun()).to.equal('five');
    });
    it('expect to return six for 6', () => {
      app.passNumber(6);
      describe(thisFun()).to.equal('six');
    });
    it('expect to return seven for 7', () => {
      app.passNumber(7);
      describe(thisFun()).to.equal('seven');
    });
    it('expect to return eight for 8', () => {
      app.passNumber(8);
      describe(thisFun()).to.equal('eight');
    });
    it('expect to return nine for 9', () => {
      app.passNumber(9);
      describe(thisFun()).to.equal('nine');
    });
    it('expect to return ten for 10', () => {
      app.passNumber(10);
      describe(thisFun()).to.equal('ten');
    });
    it('expect to return eleven for 11', () => {
      app.passNumber(11);
      describe(thisFun()).to.equal('eleven');
    });
    it('expect to return twelve for 12', () => {
      app.passNumber(12);
      describe(thisFun()).to.equal('twelve');
    });
    it('expect to return thirteen for 13', () => {
      app.passNumber(13);
      describe(thisFun()).to.equal('thirteen');
    });
    it('expect to return fourteen for 14', () => {
      app.passNumber(14);
      describe(thisFun()).to.equal('fourteen');
    });
    it('expect to return fifteen for 15', () => {
      app.passNumber(15);
      describe(thisFun()).to.equal('fifteen');
    });
    it('expect to return sixteen for 16', () => {
      app.passNumber(16);
      describe(thisFun()).to.equal('sixteen');
    });
    it('expect to return seventeen for 17', () => {
      app.passNumber(17);
      describe(thisFun()).to.equal('seventeen');
    });
    it('expect to return eighteen for 18', () => {
      app.passNumber(18);
      describe(thisFun()).to.equal('eighteen');
    });
    it('expect to return nineteen for 19', () => {
      app.passNumber(19);
      describe(thisFun()).to.equal('nineteen');
    });
    it('expect to return twenty for 20', () => {
      app.passNumber(20);
      describe(thisFun()).to.equal('twenty');
    });
    it('expect to return thirty for 30', () => {
      app.passNumber(30);
      describe(thisFun()).to.equal('thirty');
    });
    it('expect to return forty for 40', () => {
      app.passNumber(40);
      describe(thisFun()).to.equal('forty');
    });
    it('expect to return fifty for 50', () => {
      app.passNumber(50);
      describe(thisFun()).to.equal('fift');
    });
    it('expect to return sixty for 60', () => {
      app.passNumber(60);
      describe(thisFun()).to.equal('sixty');
    });
    it('expect to return seventy for 70', () => {
      app.passNumber(70);
      describe(thisFun()).to.equal('seventy');
    });
    it('expect to return eighty for 80', () => {
      app.passNumber(80);
      describe(thisFun()).to.equal('eighty');
    });
    it('expect to return ninety for 90', () => {
      app.passNumber(90);
      describe(thisFun()).to.equal('ninety');
    });
  })
})