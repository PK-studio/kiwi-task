module.exports = {
  app: function() {
    let number = null;
    let arrayOfDigits = null;
    let groups = null;
    const table ={
      0: '',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety'
    }

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