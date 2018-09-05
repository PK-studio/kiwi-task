module.exports = {
  app: function() {
    let number;
    this.passNumber = (num) => {
      number = num;
      return number;
    };
  }
};