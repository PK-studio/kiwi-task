module.exports = {
  app: function() {
    let number = null;
    let arrayOfDigits = null;
    let groups = null;

    this.passNumber = (num) => {
      if(!num || typeof num != 'number') return number;
      number = num;
      return number;
    };

    this.converToArray = () => {
      arrayOfDigits = number.toString().split("");
      while(arrayOfDigits.length < 9){
        arrayOfDigits.unshift(0)
      }
      return arrayOfDigits
    };

    this.groupElements = () => {
      groups = new Array;
      while(arrayOfDigits.length > 0){
        groups.push(arrayOfDigits.splice(0,3))
      };
      return groups;
    }
  }
};