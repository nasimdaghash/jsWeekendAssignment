function century(year) {
    let result = 0;
    for (let i = 0; i < year; i++) {
      if (i % 100 === 0) {
        result++;
      }
    }
    return result;
  }

  /////
  function century1(year) {
    return Math.ceil(year / 100);
  }

console.log(century(588));    
console.log(century1(2001)); 