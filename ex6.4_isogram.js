
function isIsogram(str) {
    //if empty return true.
    if (str == "") {
      return true;
    } else {
      // All lower case.
      str = str.toLowerCase();
    }
    //split string into individual characters. 
    let array = str.split('');
    let sortedArr = array.slice().sort();
  
    for (let i = 0; i < array.length; i++) {
      //if duplicate is found return false.
      if (sortedArr[i + 1] == sortedArr[i]) {
        return false;
      }
    }
    //else return true
    return true;
  }
  
console.log(isIsogram('Dermatoglyphics')); 
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));