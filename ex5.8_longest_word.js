function findShort(s){
    var arr = s.split(' ');
    var longest = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i].length > longest.length){
        longest = arr[i];
      }
    }
    return longest;
  }
  
  let s = "its Beautiful Sun Shining day";
  console.log( findShort(s));