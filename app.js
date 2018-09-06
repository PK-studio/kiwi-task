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

    this.matchAndReplaceNumbersWithWords = () => {
      let phrase = "test";
      let [a,b,c] = [null,null,null]
      let groupSuffix;
      let setupGroupSuffix = (groupIndex) =>{
        switch (groupIndex){
          case 0:
            groupSuffix = 'million, ';
            break;
          case 1:
            groupSuffix = 'thousand, ';
            break;
          case 2:
            groupSuffix = '';
            break;
        }
      }
      let changeValueForProp = (prop) => {
        if(prop.length == 2){
          prop.split('').forEach((singleProp) => {
            singleProp = null;
          });
        }else{
          prop = null;
        };
      };
      let checkAndReplace = (prop) => {
        let numberSuffix = (prop == 'a' ? ' hundred and ' : '');
        Object.keys(table).forEach((numberFromTable, tableIndex) => {
          if(numberFromTable == prop){
            phrase += (Object.values(table)[tableIndex] + numberSuffix);
            changeValueForProp(prop);
          };
        });
      };

      groups.forEach((element, groupIndex) => {
        [a,b,c] = element;
        setupGroupSuffix(groupIndex)
        checkAndReplace(a)
        checkAndReplace(b+''+c)
        if([a,b] != null){
          checkAndReplace(b)
          checkAndReplace(c)
        }
        phrase += groupSuffix;
      });

      return phrase;
    }
  }
};