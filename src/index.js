module.exports = 
function getZerosCount(number) {
  let n;
  let count = 0;
  for (let i = 5; i <= number; i += 5){
    n = i;
    while(n % 5 == 0){
      n /= 5;
      count ++;
    }
  }
  return count;
}
