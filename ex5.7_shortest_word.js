function findShort(s){
    var arr = s.split(' ');
    var smallest = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i].length < smallest.length){
        smallest = arr[i];
      }
    }
    return smallest.length;
  }
  
  let s = "where were you when that happend";
  console.log( findShort(s));