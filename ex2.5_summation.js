function summation(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      sum += i;
    }
    return sum;
  }

  function summation1(n) {
    return n * (n + 1) / 2;
  }

  //Recursion
  function summation2(n) {
    if (n <= 1) {
      return 1;
    } else {
      return n + summation(n - 1);
    }
  }

  let n = 10;
  console.log(summation(n));
  console.log(summation1(n)); 
  console.log(summation2(n));
