 // 2.1 Sum of lowest numbers
 function sumTwoSmallestNumbers(numbers) {  
    var ordered = numbers.sort(function(a,b){return a-b;});
    var result=0;
    for(i=0; i<ordered.length; i++){
      if(i==0){
        result+=ordered[0];
      }
      if(i==1){
        result+=ordered[1];
      }
    }
    console.log(result);
    return result;

  }

  //let numbers = [0,5,6,99,3,44,67,12,1,-1 , -5];
 // let numbers = [-1];
  let numbers = [19, 5, 42, 2, 77];
  //let numbers = [10, 343445353, 3453445, 3453545353453];
  sumTwoSmallestNumbers(numbers);


