// 1. 
function basicOp(operation, value1, value2)
{
  if(operation == '+')
    return value1 + value2;
  if(operation == '-')
    return value1 - value2;
  if(operation == '*')
    return value1 * value2;
  if(operation == '/')
  return value1 / value2;
}

// 2. 
function basicOp(operation,value1,value2){
  if(typeof value1 !== "number" || typeof value2 !== "number")
    return "unknown value"
  switch(operation){
    case ("+"):
      return value1 + value2;
    case ("-"):
      return value1 - value2;
    case ("*"):
      return value1 * value2;
    case ("/"):
      return value1 / value2;
    default:
      return "unknown value"
  }

}

    console.log(basicOp('+', 4, 7)); // Output: 11
    console.log(basicOp('-', 15, 18)); // Output: -3
    console.log(basicOp('*', 5, 5)); // Output: 25
    console.log(basicOp('/', 49, 7)); // Output: 7