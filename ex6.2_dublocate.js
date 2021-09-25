function duplicateCount(text){
    const splitString = text.toLowerCase().split("").sort();
    let results = [];
  
    for (let i = 0 ; i < splitString.length; i) {
        let count = 0 ,k=0 ;
        for(let j=i;j < splitString.length; j++)
        {
            if (splitString[i] == splitString[j]) {
                count++;                
            }
        }

        if(count>1){
            results.push([splitString[i],count]);                     
        }
        i=i+count
    }

    const setArray = new Set(results);
    return setArray.size;
  };

  console.log(duplicateCount("aaabbbBcde"));
  console.log(duplicateCount("Indivisibilities"));
  console.log(duplicateCount("ndivisibility")); 
  console.log(duplicateCount("Aa11"));
