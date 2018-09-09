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
        arrayOfDigits.unshift('0')
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

    this.matchAndReplaceNumbersWithWords = () => {
      let phrase = "";
      let suffixOfGroup = (groupIndex) =>{
        let suffix;
        switch (groupIndex){
          case 0:
            suffix = 'million, ';
            break;
          case 1:
            suffix = 'thousand, ';
            break;
          case 2:
            suffix = '';
            break;
        }
        return suffix;
      }
      let checkAndReplace = (value, suffixOfNum, prefixOfNum, tens) => {
        let done = false;
        if(value == 0) return done;
        Object.keys(table).forEach((numberFromTable, tableIndex) => {
          if(numberFromTable == value){
            let word = Object.values(table)[tableIndex]
            phrase += (prefixOfNum + word + ' ' + suffixOfNum);
            if(tens) done=true;
          }
        });
        return done;
      };
      let isZero = (value) => {return value == "0"};
      let lastWord = () => {
        let toArray = phrase.split(" ");
        return toArray[toArray.length-1]
      }
      groups.forEach((arrayOfNum, groupIndex) => {
        if(arrayOfNum.every(isZero)) return null;
        let [a,b,c] = arrayOfNum
        let checkList = [a, b+''+c, b+'0', c]
        checkList.some((value, position) => {
          let suffixOfNum = (position === 0) ? 'hundred' : '';
          let prefixOfNum = (lastWord() == 'hundred') ? ' and ' : '';
          let tens = (position === 1) ? true : false;
          let isDone = checkAndReplace(value, suffixOfNum, prefixOfNum, tens)
          if(isDone) return true;
        })
        phrase += suffixOfGroup(groupIndex);
      });
      return phrase.trim();
    }
    this.try = (input) => {
      if(!input) return;
      this.passNumber(Number(input));
      this.converToArray();
      this.groupElements();
      return this.matchAndReplaceNumbersWithWords();
    }
  }
};