

let arr = [1, 1, 1, 1];
//let sum = 0 , power ; 
//power= arr.length-1;
/*
for ( let i=0 ; i<arr.length;i++)
{
    sum = sum + arr[i]*(i**2);
    //power--;
}
console.log(sum);
*/


function arrayToInt (arr) {
    return Number.parseInt(arr.join(""), 2);
  }

  console.log(arrayToInt(arr));
  
