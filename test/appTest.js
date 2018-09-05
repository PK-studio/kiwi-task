const assert = require('chai').assert;
const expect = require('chai').expect;
const appLocation = require("../app");

describe("Test for this app: replace number with words", () => {
  let app = null;
  app = new appLocation.app();

  describe("Initialization", () => {
    it("It should return object", () => {
      expect(app).to.be.a('object');
    });
  });

  describe("Run app", () => {
    it("it should return empty array", () => {
      expect(app().to.be.empty);
    });
  });
})