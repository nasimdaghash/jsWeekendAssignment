function maskify(str){
    if (str.length > 4) {  // if the string more than 4 digits 
      let result = '';
      return str.split('').reduce((acc, cur, i) => {
        if (str.length - i > 4) {  // change all the str to # excipt the last four
          result += '#';           
        } else {
          result += cur;
        }
        return result;
      }, '');
    } else {                 // if the string liss than 5 digits  show all the string 
      return str;
    }
  }

  console.log(maskify("333"));