//Square Every Digit
function squareDigits(num){
    let numStr = num + "";
    let total = "";
  
    for(let i in numStr){
      total += (parseInt(numStr[i])**2 + "");
    }
  
    return parseInt(total);
  }