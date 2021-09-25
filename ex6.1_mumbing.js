
function accum(str) {
    let count = 0;
     let storage = "";
    
     for (let letter of str) {
   
       storage += letter.toUpperCase() + letter.repeat(count) + "-";
       count++;
     }
    
     return storage.substring(0, storage.length - 1);
   }

   let str = "abcd";
console.log(accum(str));

