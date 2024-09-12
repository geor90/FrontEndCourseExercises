const sumAll = function(num1,num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || num1<0 || num2<0){
        return "ERROR";
      }
      let sum=0;
      if (num1<num2) {
        for (let i=num1; i<num2+1; i++){
          sum += i;
        }
        return sum;
      } else if (num1>num2) {
        for (let j=num2; j<num1+1; j++){
          sum +=j
        }    
        return sum;
      }
}

module.exports = sumAll
