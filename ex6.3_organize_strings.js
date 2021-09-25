 /*
 function longest(s1, s2) {
    let res = s1 + s2;
    let res1 = "";
    res = res.split('');
 //  res = [...new Set(res)];
    res = res.sort();

    for (let i = 0 ; i < res.length; i) {
        let count = 0 ;
        res1=res1+res[i];
        for(let j=i;j < res.length; j++)
        {
            if (res[i] == res[j]) {
                count++;                
            }
        }
        i=i+count
    }
    return (res1);
}

a = "xyaabbbccccdefww" ;
b = "xxxxyyyyabklmopq";
console.log(longest(a, b));
c = "abcdefghijklmnopqrstuvwxyz";
console.log(longest(c, c)); // "abcdefghijklmnopqrstuvwxyz"
*/

/// second answere 
function longest(s1, s2) {
    // your code
    //Create Arrays a and b containing unique values by making them Set and converting them back to array.
    let a = [... new Set(s1.split(""))];
    let b = [... new Set(s2.split(""))];
  
    //combine both arrays into one
    for (let i=0; i<b.length; i++){
        a.push(b[i]);
    }
    //create a unique array from the combination
    let init_combo = [... new Set(a)];
    //sort array and join to form a string
    let combo = init_combo.sort().join("");
    //Return the final result
    return combo;
  
  }

a = "xyaabbbccccdefww" ;
b = "xxxxyyyyabklmopq";
console.log(longest(a, b));
c = "abcdefghijklmnopqrstuvwxyz";
console.log(longest(c, c));