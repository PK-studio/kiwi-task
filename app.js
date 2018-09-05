module.exports = {
  app: function() {
    let number = null;
    this.passNumber = (num) => {
      if(!num || typeof num != 'number') return number;
      number = num;
      return number;
    };
  }
};