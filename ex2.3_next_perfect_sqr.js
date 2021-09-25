//  Find the Next Perfect Square

function findNextSquare(sq) { 

    // Return the next square if sq is a perfect square, -1 otherwise 
    if (Number.isInteger(Math.sqrt(sq))) 
      return (Math.sqrt(sq)+1)*(Math.sqrt(sq)+1); 
    else 
      return -1; 
  } 



  function findNextSquare1(sq) { 

    // Return the next square if sq is a perfect square, -1 otherwise 
    if (Number.isInteger(Math.sqrt(sq))) 
      return ((Math.sqrt(sq)+1)**2); 
    else 
      return -1; 
  } 

  let sq=144;
  console.log(findNextSquare1(sq));
  console.log(findNextSquare(sq));
