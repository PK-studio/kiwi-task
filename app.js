module.exports = {
  app: function() {
    let number = null;
    let arrayOfDigits = null;

    this.passNumber = (num) => {
      if(!num || typeof num != 'number') return number;
      number = num;
      return number;
    };

    this.converToArray= () => {
      arrayOfDigits = number.toString().split("");
      let iteration = arrayOfDigits.length;
      while(iteration < 9){
        arrayOfDigits.unshift(0)
        iteration = arrayOfDigits.length;
      }
      return arrayOfDigits
    };
  }
};