//Factorial
function factorial(n)
{
  let fac = 1
  
  if (n < 0 || n > 12){
    throw new RangeError ("n must be above 0 and below 12")
  } else{
  
  for (let i = 1; i <= n; i++){
    fac *= i
  }
  return fac
    }
}