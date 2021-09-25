/*
function tribonacci(signature, n) {
    if (n === 0) {
      return []
    } else if (n === 1) {
      return [1]
    } else {
      for (let i = 3; i <= n; i++) {
        signature[i] = signature[i - 1] + signature[i - 2] + signature[i - 3]
      }
      signature.pop()
      return signature
    }
  }

let signature =[];
let n=5;
console.log(tribonacci(signature, n));
*/
function tribonacci(s,n){
    let arr = [];
    for(let i=0; i<n; i++) {
      arr.push((i<3) ? s[i] : arr[i-1]+arr[i-2]+arr[i-3]);
    }
    return arr;
  }
  
  // alt version
 /* 
  function tribonacci2(signature, n) {
    while(signature.length < n) {
      signature.push(signature.slice(-3).reduce(sum));
    }
    return signature.slice(0, n);
  }
  */
  //tribonacci([1,1,1],10)
  console.log(tribonacci([1,1,1],10));
  console.log(tribonacci([0,1,1],10));
 /* console.log(tribonacci2([1,1,1],10));
  console.log(tribonacci2([0,1,1],10)); */