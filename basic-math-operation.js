function basicOp(operation, value1, value2){
switch (operation){
  case '+':
     return value1 + value2;
     break;
  case '-':
    return value1 - value2;
    break;
  case '*':
    return value1 * value2;
    break;
  case'/':
    return value1 / value2;
    break;
    default:
      console.log('please enter a valid operation followed by value1, value2')
  } 
}