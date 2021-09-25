// question 1 .1 
//a. 
function boolToWord1(bool){
    return bool ? 'Yes':'No';
  }

// b.
function boolToWord(bool){
    if (bool) {
      return 'Yes';
    } else {
      return 'No';
    }
  }

  bool = true
  console.log(boolToWord(bool));
  console.log(boolToWord1(bool));